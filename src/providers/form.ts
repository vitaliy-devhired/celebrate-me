import {Injectable} from "@angular/core";
import {FormGroup} from "@angular/forms";
import "rxjs/add/operator/map";

@Injectable({
    providedIn: 'root'
  })
export class FormProvider {

    protected isSubmit = false;

    protected errors: object = {};

    constructor() {
        
    }

    // using messages list
    public messages: object = {
        'required'      : 'This is required field.',
        'email'         : 'Email is not valid',
        'minlength'     : 'Password must be at least 4 characters long.',
        'notEquivalent' : 'Password is not equal'
    };

    /**
     *
     * @param FormControl control
     *
     * @returns {boolean}
     */
    protected checkError(control): boolean {
        if(control.valid) {
            return false;
        }

        if(control.untouched && this.isSubmit) {
            return true;
        }

        return control.touched;
    }

    /**
     *
     * @param FormGroup form
     * @param string name
     *
     * @returns {boolean}
     */
    protected isValidate(form: FormGroup, name: string): boolean {
        let control = form.get(name);
        if(control.disabled == true) {
            return false;
        }

        let result = this.checkError(control);
        if(result) {
            let msg = [];
            for (let key in control.errors) {
                msg.push(this.messages[key]);
            }

            this.errors[name] = '<p>'+ msg.join('</p><p>') +'</p>';
        } else {
            // clear previous error message (if any)
            this.errors[name] = '';
        }

        return result;
    }

    /**
     *
     * @param FormGroup form
     * @param string name
     *
     * @returns {boolean}
     */
    public hasError(form: FormGroup, name: string): boolean {
        let has = this.isValidate(form, name);

        if(this.isSubmit && has == false) {
            let errors = form.get(name).errors;
            if(errors) {
                has = !!Object.keys(errors).length;
            }
        }

        return has;
    }

    /**
     *
     * @param FormGroup form
     */
    public onValueChanged(form: FormGroup): void {
        for (let name in form.controls) {
            let field = form.get(name);
            if(field instanceof FormGroup) {
                this.onValueChanged(field);
            } else {
                this.hasError(form, name);
            }
        }
    }
}
