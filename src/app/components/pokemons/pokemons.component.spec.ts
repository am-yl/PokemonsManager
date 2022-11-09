import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PokemonsService } from 'src/app/services/pokemons.service';
import { FormsModule } from '@angular/forms';
import { PokemonsComponent } from './pokemons.component';
import { Pokemon } from 'src/app/model/pokemon';

describe('PokemonsComponent', () => {
  let component: PokemonsComponent;
  let fixture: ComponentFixture<PokemonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PokemonsComponent],
      imports: [HttpClientModule, FormsModule],
      providers: [PokemonsService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PokemonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
