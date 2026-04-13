import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Routes } from '@angular/router';
import { PlayersComponent } from './players.component';

const routes: Routes = [{ path: 'players', component: PlayersComponent }];

describe('PlayersComponent', () => {
  let component: PlayersComponent;
  let fixture: ComponentFixture<PlayersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayersComponent, RouterTestingModule.withRoutes(routes)],
    }).compileComponents();

    fixture = TestBed.createComponent(PlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create PlayersComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct route for PlayersComponent', () => {
    const route = routes.find((r) => r.path === 'players');
    expect(route).toBeTruthy();
    expect(route?.component).toBe(PlayersComponent);
  });

  it('should correctly display a list of characters', async () => {
    await fixture.whenStable();
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const cards = compiled.querySelectorAll('.player-card');
    expect(cards.length).toBe(component.characters.length);
  });
});
