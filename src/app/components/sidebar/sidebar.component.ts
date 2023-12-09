import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    // Use const instead of let for constant variables
    const arrows = document.querySelectorAll('.arrow');
    const sidebar = document.querySelector('.sidebar');
    const sidebarBtn = document.querySelector('.bx-menu');

    // Use forEach for cleaner iteration over NodeList
    arrows.forEach((arrow) => {
      arrow.addEventListener('click', (event) => {
        const arrowParent = (event as any).target.parentElement.parentElement;
        arrowParent.classList.toggle('showMenu');
      });
    });

    // Use optional chaining to simplify null/undefined checks
    sidebarBtn?.addEventListener('click', () => {
      sidebar?.classList.toggle('close');
    });
  }
}
