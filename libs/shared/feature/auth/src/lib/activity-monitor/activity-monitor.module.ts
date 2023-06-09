import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ActivityMonitorService } from '@backbase/identity-auth';
import { HeaderModule } from '@backbase/ui-ang/header';
import { ModalModule } from '@backbase/ui-ang/modal';
import { ActivityMonitorComponent } from './container/activity-monitor.component';
import { ActivityMonitorLayoutComponent } from './layout/activity-monitor-layout.component';

const uiModules = [ModalModule, HeaderModule];

@NgModule({
  imports: [CommonModule, ...uiModules],
  declarations: [ActivityMonitorLayoutComponent, ActivityMonitorComponent],
  providers: [ActivityMonitorService],
  exports: [ActivityMonitorComponent],
})
export class ActivityMonitorModule {}
