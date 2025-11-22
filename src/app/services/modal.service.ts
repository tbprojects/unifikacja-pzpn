import { effect, Injectable, signal } from '@angular/core';
import { AgeCategory } from '../models/unification.model';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  readonly isOpen = signal(false);
  readonly selectedCategory = signal<AgeCategory | null>(null);

  constructor() {
    // Automatyczne zarządzanie overflow body
    effect(() => {
      document.body.style.overflow = this.isOpen() ? 'hidden' : 'auto';
    });
  }

  open(category: AgeCategory): void {
    this.selectedCategory.set(category);
    this.isOpen.set(true);
  }

  close(): void {
    this.isOpen.set(false);
    this.selectedCategory.set(null);
  }
}
