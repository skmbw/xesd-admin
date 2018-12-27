import { Component, HostListener, ChangeDetectionStrategy } from '@angular/core';
import { NzModalService, NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'header-storage',
  template: `
  <i nz-icon type="tool"></i>
  清理本地缓存
  `,
  host: {
    '[class.d-block]': 'true',
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderStorageComponent {
  constructor(
    private confirmServ: NzModalService,
    private messageServ: NzMessageService,
  ) {}

  @HostListener('click')
  _click() {
    this.confirmServ.confirm({
      nzTitle: 'Make sure clear all local storage?',
      nzOnOk: () => {
        localStorage.clear();
        this.messageServ.success('Clear Finished!');
      },
    });
  }
}
