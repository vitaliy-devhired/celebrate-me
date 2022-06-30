import gulp from 'gulp';
import del from 'del';
import sass from 'gulp-sass';
import cleanCSS from 'gulp-clean-css';
import concat from 'gulp-concat';
import rename from 'gulp-rename';
import svgcss from 'gulp-svg-css';
import imagemin from 'gulp-imagemin';
import svgSprite from 'gulp-svg-sprite';
import embedSvg from 'gulp-embed-svg';

/*** VARIABLES ***/

const paths = {
    src: 'src',
    dest: 'dist',
    temp: 'temp',
    styles: {
        src: [
            'src/scss/variables.scss',
            'src/scss/common.scss',
            'src/scss/fonts.scss',
            'src/scss/tags.scss',
            'src/scss/form.scss',
            'src/scss/**/*.scss',
        ],
        dest: 'dist/css/',
        srcTemp: [
            'node_modules/modern-normalize/modern-normalize.css',
            'temp/css/**/*.{css,scss}',
        ],
        destTemp: 'temp/css/',
    },
    images: {
        src: [
            'src/img/**/*.*',
            '!src/img/svg/**/*.svg',
            '!src/img/svg-sprite/**/*.svg',
            '!src/img/svg-border/**/*.svg',
        ],
        dest: 'dist/img/',
        svg: 'src/img/svg/**/*.svg',
        svgSprite: 'src/img/svg-sprite/**/*.svg',
        svgSpriteDest: 'dist/img/svg/',
        svgBorder: 'src/img/svg-border/**/*.svg',
    },
    fonts: {
        src: 'src/fonts/**/*.*',
        dest: 'dist/fonts/',
    },
    content: {
        src: 'src/*.html',
        destSrc: 'dist/*.html',
        dest: 'dist/',
    },
};

/*** CLEAN ***/

export function clean() {
    return del([paths.dest, paths.temp]);
}

/*** STYLES ***/

function concatStyles() {
    return gulp.src(paths.styles.src)
        .pipe(concat('index.scss'))
        .pipe(gulp.dest(paths.styles.destTemp));
}

function concatSvg() {
    return gulp.src(paths.images.svg)
        .pipe(svgcss({
            fileName: 'icons',
            cssPrefix: 'svg--',
            cssProperty: 'background-image',
            addSize: false,
        }))
        .pipe(gulp.dest(paths.styles.destTemp));
}

function concatSvgBorder() {
    return gulp.src(paths.images.svgBorder)
        .pipe(svgcss({
            fileName: 'borders',
            cssPrefix: 'svg-border--',
            cssProperty: 'border-image-source',
            addSize: false,
        }))
        .pipe(gulp.dest(paths.styles.destTemp));
}

function concatStylesTemp() {
    return gulp.src(paths.styles.srcTemp)
        .pipe(concat('index.scss'))
        .pipe(sass())
        .pipe(gulp.dest(paths.styles.dest))
        .pipe(cleanCSS())
        .pipe(rename({
            suffix: '.min',
        }))
        .pipe(gulp.dest(paths.styles.dest));
}

export const styles = gulp.series(concatStyles, concatSvg, concatSvgBorder, concatStylesTemp);

/*** IMAGES ***/

export function optimizeImages() {
    return gulp.src(paths.images.src)
        .pipe(imagemin())
        .pipe(gulp.dest(paths.images.dest));
}

export function joinSvgSprite() {
    return gulp.src(paths.images.svgSprite)
        .pipe(svgSprite({
            svg: {
                xmlDeclaration: false,
                doctypeDeclaration: false,
            },
            mode: {
                symbol: {
                    dest: '.',
                    sprite: 'sprite.svg',
                },
            },
        }))
        .pipe(gulp.dest(paths.images.svgSpriteDest));
}

export const images = gulp.series(optimizeImages, joinSvgSprite);

/*** FONTS ***/

export function fonts() {
    return gulp.src(paths.fonts.src)
        .pipe(gulp.dest(paths.fonts.dest));
}

/*** CONTENT ***/

export function copyContent() {
    return gulp.src(paths.content.src)
        .pipe(gulp.dest(paths.content.dest));
}

export function embedSvgContent() {
    return gulp.src(paths.content.destSrc)
        .pipe(embedSvg({
            root: paths.images.svgSpriteDest,
            xmlMode: false,
        }))
        .pipe(gulp.dest(paths.content.dest));
}

export const content = gulp.series(copyContent, embedSvgContent);

/*** WATCHERS ***/

export function watch() {
    return new Promise(function(resolve, reject) {
        gulp.watch(paths.fonts.src, fonts);
        gulp.watch(paths.images.src, images);
        gulp.watch(paths.images.svg, styles);
        gulp.watch(paths.styles.src, styles);
        gulp.watch(paths.content.src, content);
        resolve();
    });
}

/*** BUILD ***/

const build = gulp.series(
    clean,
    gulp.parallel(fonts),
    gulp.parallel(images),
    gulp.parallel(styles),
    gulp.parallel(content),
);

export default build;
