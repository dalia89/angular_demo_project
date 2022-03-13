import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { BusinessWithUsComponent } from './business-with-us/business-with-us.component';
import { CareersComponent } from './careers/careers.component';
import { GivingBackComponent } from './giving-back/giving-back.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TermsOfUseComponent } from './terms-of-use/terms-of-use.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'business-with-us', component: BusinessWithUsComponent },
    { path: 'careers', component: CareersComponent },
    { path: 'giving-back', component: GivingBackComponent },
    { path: 'contact-us', component: ContactUsComponent },
    { path: 'terms-of-use', component: TermsOfUseComponent },
    { path: 'privacy-policy', component: PrivacyPolicyComponent },
    // { path: 'register', component: RegisterComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
