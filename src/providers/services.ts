export * from './service.api';
export * from './form';

export class AppLabels {
    static _labels = {
        // Form messages
        'form_is_not_submit'         : 'Sorry! Form is not submit.',

        // Form validation - application errors
        'min_length_6'               : 'Password must be at least 6 characters long.',

        // Form validation - default errors
        'required'                   : 'This is required field.',
        'email'                      : 'Email is not valid',
        'minlength'                  : 'Password must be at least %chars characters long.',
        'notEquivalent'              : 'Password is not equal',
        'notMatch'                   : 'These passwords do not match.',

        // Forgot string
        'forgot_reset_success'       : 'An e-mail has been been sent to you with a link to reset your password',
        'forgot_reset_error'         : 'Specified email address does not exist',

        // Application messages
        'application_login_error'    : 'Please insert credentials',
        'application_auth_error'     : 'Invalid login credential',
        'application_error'          : 'Sorry, Something wrong on application, please try again later.',
        'application_server_error'   : 'Something wrong on server, please try again later.',
        'password_was_change'        : 'Password successfully updated.',
        'password_was_not_change'    : 'Current password is invalid.',

        // Application user
        'user_changes_saved'         : 'Changes saved',
        'user_error_uploaded'        : 'Error while uploading file.',
        'user_successfully_uploaded' : 'Image was successfully updated',
        'user_image_error_select'    : 'Error while selecting image.',
        'user_image_large'           : 'large image',
        'user_confirm_logout'        : 'Are you sure you want to logout?',
        'user_status_pending'        : 'Please add a valid license to your profile to be able to add photos and participate in discussions.',
        'error_email'                : 'User with such email already exists.',
    };

    static text(key : string) : string {
        if(AppLabels._labels[key]) {
            return AppLabels._labels[key];
        }

        return '';
    }

    static set(key : string, value : string) : void {
        AppLabels._labels[key] = value;
    }
}

export class AppFunction {

    static label(key : string) {
        return AppLabels.text(key);
    }
}