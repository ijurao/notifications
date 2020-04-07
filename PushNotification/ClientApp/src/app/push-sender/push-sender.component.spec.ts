import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PushSenderComponent } from './push-sender.component';

describe('PushSenderComponent', () => {
  let component: PushSenderComponent;
  let fixture: ComponentFixture<PushSenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PushSenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PushSenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
