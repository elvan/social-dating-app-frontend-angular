import { Component } from '@angular/core';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { HasRoleDirective } from '../../_directives/has-role.directive';
import { PhotoManagementComponent } from '../photo-management/photo-management.component';
import { UserManagementComponent } from '../user-management/user-management.component';

@Component({
  selector: 'app-admin-panel',
  standalone: true,
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.css',
  imports: [
    TabsModule,
    UserManagementComponent,
    HasRoleDirective,
    PhotoManagementComponent,
  ],
})
export class AdminPanelComponent {}
