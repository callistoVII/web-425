import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SpecialRequestComponent } from './special-request.component';

describe('SpecialRequestComponent', () => {
  let component: SpecialRequestComponent;
  let fixture: ComponentFixture<SpecialRequestComponent>;
  let compiled: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecialRequestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SpecialRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('renders the form fields and initial message', () => {
    expect(compiled.querySelector('input[name="customerName"]')).toBeTruthy();
    expect(
      compiled.querySelector('textarea[name="specialRequest"]'),
    ).toBeTruthy();
    expect(compiled.querySelectorAll('input[name="spiceLevel"]').length).toBe(
      3,
    );
    expect(compiled.textContent).toContain('No special request submitted yet');
  });

  it('displays the entered request summary after form submission', () => {
    const nameInput = compiled.querySelector(
      'input[name="customerName"]',
    ) as HTMLInputElement;
    const requestTextarea = compiled.querySelector(
      'textarea[name="specialRequest"]',
    ) as HTMLTextAreaElement;
    const spiceRadios = compiled.querySelectorAll(
      'input[name="spiceLevel"]',
    ) as NodeListOf<HTMLInputElement>;
    const submitButton = compiled.querySelector(
      'button[type="submit"]',
    ) as HTMLButtonElement;

    nameInput.value = 'Diego';
    nameInput.dispatchEvent(new Event('input'));

    requestTextarea.value = 'Extra guacamole, please';
    requestTextarea.dispatchEvent(new Event('input'));

    const hotRadio = Array.from(spiceRadios).find(
      (radio) => radio.value === 'Hot',
    );
    if (hotRadio) {
      hotRadio.checked = true;
      hotRadio.dispatchEvent(new Event('change'));
    }

    fixture.detectChanges();
    submitButton.click();
    fixture.detectChanges();

    expect(compiled.textContent).toContain('Name: Diego');
    expect(compiled.textContent).toContain('Request: Extra guacamole, please');
    expect(compiled.textContent).toContain('Spice Level: Hot');
  });

  it('replaces the initial conditional message after a successful submission', () => {
    const nameInput = compiled.querySelector(
      'input[name="customerName"]',
    ) as HTMLInputElement;
    const requestTextarea = compiled.querySelector(
      'textarea[name="specialRequest"]',
    ) as HTMLTextAreaElement;
    const spiceRadios = compiled.querySelectorAll(
      'input[name="spiceLevel"]',
    ) as NodeListOf<HTMLInputElement>;
    const submitButton = compiled.querySelector(
      'button[type="submit"]',
    ) as HTMLButtonElement;

    nameInput.value = 'Maria';
    nameInput.dispatchEvent(new Event('input'));

    requestTextarea.value = 'Light salsa';
    requestTextarea.dispatchEvent(new Event('input'));

    const mediumRadio = Array.from(spiceRadios).find(
      (r) => r.value === 'Medium',
    );
    if (mediumRadio) {
      mediumRadio.checked = true;
      mediumRadio.dispatchEvent(new Event('change'));
    }

    fixture.detectChanges();
    submitButton.click();
    fixture.detectChanges();

    expect(compiled.textContent).not.toContain(
      'No special request submitted yet',
    );
    expect(compiled.textContent).toContain('Name: Maria');
  });
});
