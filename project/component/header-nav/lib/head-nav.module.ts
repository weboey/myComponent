import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderNavComponent } from './header-nav.component';
import {NgZorroAntdModule, NZ_NOTIFICATION_CONFIG} from 'ng-zorro-antd';
import { RouterModule } from '@angular/router';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { TreeViewItemComponent} from './top-menu/tree-item.component';
import { UserMenuComponent} from './user-menu/user-menu.component';
import { HeaderNavService} from './service/header-nav.service';
import { HttpClientModule} from '@angular/common/http';
import { SiteLogComponent} from './site-log/site-log.component';
import { ProjectShareSeviceComponent} from './message/project-share-sevice.component';
import { ShareService } from './service/share.service';
import { HttpHeaderService } from './service/http-header.service';
@NgModule({
  imports: [
     CommonModule,
     RouterModule,
     HttpClientModule,
     FormsModule,
     NgZorroAntdModule
  ],
  declarations: [
    HeaderNavComponent, SiteLogComponent, TopMenuComponent, UserMenuComponent, TreeViewItemComponent,
    ProjectShareSeviceComponent
  ],
  providers: [
    HeaderNavService,
    ShareService,
    HttpHeaderService,
    {
      provide: NZ_NOTIFICATION_CONFIG,
      useValue: {
        nzTop: '47px',
        nzMaxStack: 5,
      }
    }
  ],
  exports: [HeaderNavComponent],
})
export class HeaderNavModule { }
