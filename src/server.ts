import App from './web/App';
import { RootController } from './web/controllers';

const app = new App([new RootController()], 5000);

app.listen();
