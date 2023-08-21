import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

/**
 *    48 8 * * 1
    * * * * * * *
    | | | | | |
    | | | | | day of week
    | | | | months
    | | | day of month
    | | hours
    | minutes
    seconds (optional)
 */
@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);

  @Cron('45 * * * * *')
  handleCron() {
    this.logger.debug('Called when the second is 45');
  }

  @Cron('45 52 9 * * *')
  handleCron1() {
    this.logger.debug('Called when the second is 45');
  }
}
