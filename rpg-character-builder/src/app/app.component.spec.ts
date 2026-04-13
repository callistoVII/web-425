import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { PlayersComponent } from './players/players.component';
import { Routes } from '@angular/router';

const routes: Routes = [{ path: 'players', component: PlayersComponent }];

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent, RouterTestingModule.withRoutes(routes)],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have the "rpg-character-builder" title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('rpg-character-builder');
  });

  it('should render the wrapper div', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.wrapper')).toBeTruthy();
  });

  it('should have correct route for PlayersComponent', () => {
    const route = routes.find((r) => r.path === 'players');
    expect(route).toBeTruthy();
    expect(route?.component).toBe(PlayersComponent);
  });
});
