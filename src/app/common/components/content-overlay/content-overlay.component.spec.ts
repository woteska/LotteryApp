import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContentOverlayComponent } from './content-overlay.component';

describe('ContentOverlayComponent', () => {
  let component: ContentOverlayComponent;
  let fixture: ComponentFixture<ContentOverlayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ContentOverlayComponent]
    });
    fixture = TestBed.createComponent(ContentOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
