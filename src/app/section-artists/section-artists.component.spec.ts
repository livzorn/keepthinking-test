import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionArtistsComponent } from './section-artists.component';

describe('SectionArtistsComponent', () => {
  let component: SectionArtistsComponent;
  let fixture: ComponentFixture<SectionArtistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionArtistsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionArtistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
