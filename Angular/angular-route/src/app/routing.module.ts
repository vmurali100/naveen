import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { FeaturesComponent } from './components/features/features.component';
import { EnterprisesComponent } from './components/enterprises/enterprises.component';
import { SupportComponent } from './components/support/support.component';
import { PricingComponent } from './components/pricing/pricing.component';

const routes:Routes = [
    {path:'',component:HomeComponent},
    {path:'features',component:FeaturesComponent},
    {path:'enterprises',component:EnterprisesComponent},
    {path:'support',component:SupportComponent},
    {path:'pricing',component:PricingComponent}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class MyRoutingModule{}