import { Component, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Pattern } from 'src/app/enums/pattern';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {

  public form: FormGroup;
  public loading: Boolean = false;

  constructor(
    private el: ElementRef,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.form = this.buildForm();
  }

  ngOnInit(): void { }

  get email() { return this.form.get('email'); }
  get password() { return this.form.get('password'); }

  private buildForm() {
    return this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(Pattern.email)]],
      password: ['', [Validators.required]]
    });
  }

  public submit() {
    if (this.form.valid) {
      this.loading = true;
      this.authService.login(this.form.value.email, this.form.value.password).subscribe(x => {
        if (x) {
          this.router.navigateByUrl('/web/home');
        } else {
          this.loading = false;
        }
      });
    } else {
      this.el.nativeElement.querySelector('form .ng-invalid').scrollIntoView({block: 'center', behavior: 'smooth'});
    }
  }

}
