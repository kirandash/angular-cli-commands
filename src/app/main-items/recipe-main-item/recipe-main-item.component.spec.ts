import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeMainItemComponent } from './recipe-main-item.component';

describe('RecipeMainItemComponent', () => {
  let component: RecipeMainItemComponent;
  let fixture: ComponentFixture<RecipeMainItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipeMainItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeMainItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
