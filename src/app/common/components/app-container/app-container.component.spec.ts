import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { AppContainerComponent } from './app-container.component';

describe('AppContainerComponent', () => {
  let component: AppContainerComponent;
  let fixture: ComponentFixture<AppContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        AppContainerComponent
      ],
      providers: [
        provideMockStore()
      ]
    });
    fixture = TestBed.createComponent(AppContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
