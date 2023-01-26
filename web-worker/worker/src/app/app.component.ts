import { Component } from '@angular/core';
import createAndSortArray from './sort-array';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'worker';

  mainTread() {
    alert(createAndSortArray())
  }

  webWorker() {
    if (typeof Worker !== 'undefined') {
      const worker = new Worker(new URL('./app.worker', import.meta.url))
      worker.onmessage = ({data}) => {
        alert(data);
        console.log(`page got message: ${data}`);
      }
      worker.postMessage('Hi')
    } else {
      // no support
    }
  }
}
