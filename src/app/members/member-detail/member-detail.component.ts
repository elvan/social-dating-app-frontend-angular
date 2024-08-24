import { DatePipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GalleryItem, GalleryModule, ImageItem } from 'ng-gallery';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { TimeagoModule } from 'ngx-timeago';
import { Member } from '../../_models/member';
import { MembersService } from '../../_services/members.service';

@Component({
  selector: 'app-member-detail',
  standalone: true,
  imports: [TabsModule, GalleryModule, TimeagoModule, DatePipe],
  templateUrl: './member-detail.component.html',
  styleUrl: './member-detail.component.css',
})
export class MemberDetailComponent implements OnInit {
  private memberService = inject(MembersService);
  private route = inject(ActivatedRoute);
  member?: Member;
  images: GalleryItem[] = [];

  ngOnInit(): void {
    this.loadMember();
  }

  loadMember() {
    const username = this.route.snapshot.paramMap.get('username');
    if (!username) return;
    this.memberService.getMember(username).subscribe({
      next: (member) => {
        this.member = member;
        member.photos.map((p) => {
          this.images.push(new ImageItem({ src: p.url, thumb: p.url }));
        });
      },
    });
  }
}
