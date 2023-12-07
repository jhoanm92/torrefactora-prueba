import { Priority } from 'src/app/model/priority';
import { Status } from 'src/app/model/status';

export class Task {

  id : number;
  name: string;
  description: string;
  beginDate: Date;
  endDate: Date;
  priority: Priority;
  status: Status

}
