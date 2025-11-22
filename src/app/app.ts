import { Component, inject } from '@angular/core';
import { UnificationService } from './services/unification.service';
import { ModalService } from './services/modal.service';
import { AgeCategory } from './models/unification.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly unificationService = inject(UnificationService);
  protected readonly modalService = inject(ModalService);

  protected readonly isModalOpen = this.modalService.isOpen;
  protected readonly selectedCategory = this.modalService.selectedCategory;

  protected onPreviousSeason(): void {
    this.unificationService.changeSeason('prev');
  }

  protected onNextSeason(): void {
    this.unificationService.changeSeason('next');
  }

  protected openModal(category: AgeCategory): void {
    this.modalService.open(category);
  }

  protected closeModal(): void {
    this.modalService.close();
  }

  protected getCategoryRules(categoryName: string): Array<{ category: string; value: string }> {
    const rules = this.unificationService.unificationRules();
    const categoryKey = this.unificationService.getCategoryKey(categoryName);

    if (!categoryKey) {
      return [];
    }

    return rules.map(rule => ({
      category: rule.category,
      value: this.unificationService.getRuleValue(rule, categoryKey)
    }));
  }
}
