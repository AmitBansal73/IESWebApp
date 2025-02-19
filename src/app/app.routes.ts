import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UniversityNewComponent } from './components/university/university-new/university-new.component';
import { CollegeDetailsComponent } from './components/college/college-details/college-details.component';
import { CollegeNewComponent } from './components/college/college-new/college-new.component';
import { QuestionListComponent } from './components/question/question-list/question-list.component';
import { QuestionNewComponent } from './components/question/question-new/question-new.component';
import { StreamNewComponent } from './components/stream/stream-new/stream-new.component';
import { SubjectNewComponent } from './components/subject/subject-new/subject-new.component';
import { SubjectDetailsComponent } from './components/subject/subject-details/subject-details.component';
import { PaperNewComponent } from './components/papers/paper-new/paper-new.component';
import { StudentComponent } from './components/student/student/student.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthGuardService } from './auth/auth-guard.service';

export const routes: Routes = [
      { path: '', redirectTo: '/dashboard', 
        pathMatch: 'full' 
      },
      { path: 'dashboard', 
        component: DashboardComponent, canActivate:[AuthGuardService]
      },

      {path: 'login', pathMatch:'full',
        loadComponent: () =>{
          return import('./auth/login/login.component').then(module => module.LoginComponent)
        }
      },
      {path: 'register', pathMatch:'full',
        loadComponent: () =>{
          return import('./auth/register/register.component').then(module => module.RegisterComponent)
        }
      },
    
      { path: 'college', pathMatch: 'full', canActivate:[AuthGuardService],
        loadComponent: () => {
          return import('./components/college/college-list/college-list.component')
          .then(module => module.CollegeListComponent);
        }
      },
      { path: 'university', pathMatch: 'full' , canActivate:[AuthGuardService],
        loadComponent: () => {
          return import('./components/university/university-list/university-list.component')
          .then(module => module.UniversityListComponent);
        }
      },
      { path: 'stream', pathMatch: 'full', canActivate:[AuthGuardService],
        loadComponent: () => {
          return import('./components/stream/stream/stream.component')
          .then(module => module.StreamComponent);
        }
      },
      { path: 'subject', pathMatch: 'full',
        loadComponent: () => {
          return import('./components/subject/subject/subject.component')
          .then(module => module.SubjectComponent);
        }
      },
      { path: 'paper', pathMatch: 'full',
        loadComponent: () => {
          return import('./components/papers/paper/paper.component')
          .then(module => module.PaperComponent);
        }
      },
        { path: 'newUniversity', component: UniversityNewComponent},
        { path: 'CollegeDetail/:CollegeID', component: CollegeDetailsComponent},

        { path: 'newCollege', component: CollegeNewComponent},
        //{ path: 'stream', pathMatch: 'full', component: StreamComponent},
        //{ path: 'subject', pathMatch: 'full', component: SubjectComponent},
        //{ path: 'paper',pathMatch: 'full', component: PaperComponent},
        { path: 'ShowQuestions/:PaperID', component: QuestionListComponent},
        { path: 'newQuestion/:PaperID', component: QuestionNewComponent},
        
        { path: 'newStream', component: StreamNewComponent},
        { path: 'newSubject', component: SubjectNewComponent},
        { path: 'SubjectDetails', component: SubjectDetailsComponent},
        { path:'newPaper', component:PaperNewComponent},
        { path:'Student', component:StudentComponent}
];
