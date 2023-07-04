import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-content-overlay',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content-overlay.component.html',
  styleUrls: ['./content-overlay.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentOverlayComponent {
  @Input({ required: true }) content: string | number = '';
}
