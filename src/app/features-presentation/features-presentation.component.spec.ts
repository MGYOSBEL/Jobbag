import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesPresentationComponent } from './features-presentation.component';

describe('FeaturesPresentationComponent', () => {
  let component: FeaturesPresentationComponent;
  let fixture: ComponentFixture<FeaturesPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturesPresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturesPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
