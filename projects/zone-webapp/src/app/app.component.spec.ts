import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { DrinkViewerComponent } from './containers/drink-viewer/drink-viewer.component';
import { PizzaViewerComponent } from './containers/pizza-viewer/pizza-viewer.component';
import { SideViewerComponent } from './containers/side-viewer/side-viewer.component';
import { FOOD_STORE_CONFIG } from './food-store/config';
import { FoodStoreService } from './food-store/food-store.service';
import { API_TOKEN } from './token';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [
        AppComponent,
        DrinkViewerComponent,
        PizzaViewerComponent,
        SideViewerComponent,
      ],
      providers: [
        FoodStoreService,
        { provide: API_TOKEN, useValue: '' },
        {
          provide: FOOD_STORE_CONFIG,
          useValue: {
            storeId: 0,
            storeToken: '',
          },
        },
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'zone-webapp'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('zone-webapp');
  });
});
