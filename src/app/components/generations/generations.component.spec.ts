import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GenerationsComponent } from './generations.component';
import { DebugElement } from '@angular/core';

describe('GenerationsComponent', () => {
  let component: GenerationsComponent;
  let fixture: ComponentFixture<GenerationsComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GenerationsComponent],
      imports: [HttpClientModule],
      providers: []
    })
      .compileComponents();

    fixture = TestBed.createComponent(GenerationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /*  fit('doit contenir "generation"', () => {
      const parCss = debugElement.nativeElement.querySelector('.link-dark');
      expect(parCss.textContent).toContain("generation-");
    });*/

});
