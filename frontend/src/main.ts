import { bootstrapApplication } from '@angular/platform-browser';
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="shell">
      <header>
        <div><b>◈ OpsPulse</b><small>On-Prem Application Operations Center</small></div>
        <div class="live">● LIVE <span>PRODUCTION</span></div>
      </header>

      <main>
        <section class="hero">
          <div>
            <label>SYSTEM OVERVIEW</label>
            <h1>Everything looks <em>healthy.</em></h1>
            <p>Angular + Python + Nginx + Docker running on an on-prem Linux server.</p>
          </div>
          <div class="orb"><strong>99.98%</strong><small>availability</small></div>
        </section>

        <section class="cards">
          <article><i>↯</i><div><small>API latency</small><strong>42 ms</strong><em>↓ 12% vs last hour</em></div></article>
          <article><i>✓</i><div><small>Requests</small><strong>12,840</strong><em>↑ 8.4% today</em></div></article>
          <article><i>◉</i><div><small>CPU usage</small><strong>38%</strong><em>within normal range</em></div></article>
          <article><i>!</i><div><small>Active alerts</small><strong>0</strong><em>No critical alerts</em></div></article>
        </section>

        <section class="grid">
          <article class="panel">
            <h2>Traffic pulse <small>Requests per minute</small></h2>
            <div class="bars"><b *ngFor="let n of bars" [style.height.%]="n"></b></div>
          </article>
          <article class="panel">
            <h2>Service health <small>Container status</small></h2>
            <div class="service" *ngFor="let s of services"><span>● {{s}}</span><em>Healthy</em></div>
          </article>
        </section>

        <section class="grid">
          <article class="panel">
            <h2>Latest deployment <small>CI/CD pipeline</small></h2>
            <div class="timeline"><span>GitHub<br><small>Committed</small></span><span>Jenkins<br><small>Built</small></span><span>Docker<br><small>Deployed</small></span><span>On-Prem<br><small>Healthy</small></span></div>
          </article>
          <article class="panel api">
            <h2>Backend API <small>Live response</small></h2>
            <code>GET /api/status</code>
            <strong>{{message}}</strong>
            <small>Response from Flask + Gunicorn</small>
          </article>
        </section>
      </main>
    </div>
  `,
})
export class AppComponent implements OnInit {
  private http = inject(HttpClient);
  message = 'Checking backend...';
  bars = [40,58,46,72,61,81,53,68,88,72,92,77];
  services = ['Angular / Nginx','Python API','Docker Engine','Jenkins'];

  ngOnInit() {
    this.http.get<{message: string}>('/api/status').subscribe({
      next: r => this.message = r.message,
      error: () => this.message = 'Backend unavailable'
    });
  }
}

bootstrapApplication(AppComponent, { providers: [provideHttpClient()] });
