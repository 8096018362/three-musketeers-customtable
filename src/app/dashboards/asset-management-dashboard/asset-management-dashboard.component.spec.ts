import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetManagementDashboardComponent } from './asset-management-dashboard.component';

describe('AssetManagementDashboardComponent', () => {
  let component: AssetManagementDashboardComponent;
  let fixture: ComponentFixture<AssetManagementDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetManagementDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetManagementDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
