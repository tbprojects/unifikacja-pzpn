import { computed, Injectable, signal } from '@angular/core';
import {
  AGE_CATEGORIES_CONFIG,
  AgeCategory,
  CategoryKey,
  Season,
  UNIFICATION_DATA,
  UnificationRule
} from '../models/unification.model';

@Injectable({
  providedIn: 'root'
})
export class UnificationService {
  private readonly currentYear = new Date().getFullYear();
  private readonly currentMonth = new Date().getMonth();

  // Sezon piłkarski zaczyna się w lipcu (miesiąc 6)
  private readonly defaultSeasonStart = this.currentMonth >= 6 ? this.currentYear : this.currentYear - 1;

  readonly selectedSeason = signal<Season>(this.createSeason(this.defaultSeasonStart));

  readonly ageCategories = computed<AgeCategory[]>(() => {
    const baseYear = this.selectedSeason().startYear;
    return AGE_CATEGORIES_CONFIG.map(config => this.createAgeCategory(config, baseYear));
  });

  readonly unificationRules = computed<UnificationRule[]>(() => UNIFICATION_DATA);

  changeSeason(direction: 'prev' | 'next'): void {
    const current = this.selectedSeason();
    const newStartYear = direction === 'next' ? current.startYear + 1 : current.startYear - 1;
    this.selectedSeason.set(this.createSeason(newStartYear));
  }

  setSeasonByYear(year: number): void {
    this.selectedSeason.set(this.createSeason(year));
  }

  getCategoryKey(categoryName: string): CategoryKey | null {
    const config = AGE_CATEGORIES_CONFIG.find(c => c.name === categoryName);
    return config?.categoryKey ?? null;
  }

  getRuleValue(rule: UnificationRule, categoryKey: CategoryKey): string {
    return rule[categoryKey];
  }

  private createSeason(startYear: number): Season {
    return {
      startYear,
      displayName: `${startYear}/${startYear + 1}`
    };
  }

  private createAgeCategory(config: typeof AGE_CATEGORIES_CONFIG[0], baseYear: number): AgeCategory {
    const [olderAgeOffset, youngerAgeOffset] = config.ageOffset;
    const olderBirthYear = baseYear - olderAgeOffset;
    const youngerBirthYear = baseYear - youngerAgeOffset;

    const olderAgeGroup = `U${olderAgeOffset + 1}`;
    const youngerAgeGroup = `U${youngerAgeOffset + 1}`;

    return {
      name: config.name,
      divisionDetails: [
        {
          name: `${config.divisionPrefix}1`,
          ageGroup: olderAgeGroup,
          birthYear: olderBirthYear
        },
        {
          name: `${config.divisionPrefix}2`,
          ageGroup: youngerAgeGroup,
          birthYear: youngerBirthYear
        }
      ]
    };
  }
}
