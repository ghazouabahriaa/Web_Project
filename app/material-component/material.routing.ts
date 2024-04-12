import { Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ManageCategoryStageComponent } from './manage-category-stage/manage-category-stage.component';
import { RouteGuardService } from '../services/route-guard.service';
import { ManageStageComponent } from './manage-stage/manage-stage.component';



export const MaterialRoutes: Routes = [
    {
        path: 'category',
        component:ManageCategoryStageComponent,
        /*canActivate:[RouteGuardService],
        data:{
            expectRole:['admin']
        }*/
    },

    {
        path: 'stage',
        component:ManageStageComponent,
        /*canActivate:[RouteGuardService],
        data:{
            expectRole:['admin']
        }*/
    }
];
