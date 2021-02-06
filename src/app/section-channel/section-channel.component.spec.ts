import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionChannelComponent } from './section-channel.component';

describe('SectionChannelComponent', () => {
  let component: SectionChannelComponent;
  let fixture: ComponentFixture<SectionChannelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionChannelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
