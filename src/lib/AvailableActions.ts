import arrayIntersect from "@/utils/arrayIntersect";
import { array_values } from "locutus/php/array/array_values";
import CompleteAction from "./actions/CompleteAction";
import CancelAction from "./actions/CancelAction";
import DenyAction from "./actions/DenyAction";
import ResponseAction from "./actions/ResponseAction";

export default class AvailableActions {
  STATUS_NEW = "new";
  STATUS_IN_PROGRESS = "proceed";
  STATUS_CANCEL = "cancel";
  STATUS_COMPLETE = "complete";
  STATUS_EXPIRED = "expired";

  ROLE_PERFORMER = "performer";
  ROLE_CLIENT = "customer";

  private performerId;
  private clientId;

  private status;
  private finishDate;

  constructor(status: string, performerId: number, clientId: number) {
    this.setStatus(status);

    this.performerId = performerId;
    this.clientId = clientId;
  }

  public setFinishDate(date: Date) {
    const curDate = new Date();

    if (date > curDate) {
      this.finishDate = date;
    }
  }

  public getAvailableActions(role: string, id: number) {
    const statusActions = this.statusAllowedActions()[this.status];
    const roleActions = this.roleAllowedActions()[role];

    let allowedActions = arrayIntersect(statusActions, roleActions);

    allowedActions = allowedActions.filter((action) =>
      action.checkRights(id, this.performerId, this.clientId),
    );

    return array_values(allowedActions);
  }

  public getNextStatus(action: string) {
    const map = {
      [CompleteAction.name]: this.STATUS_COMPLETE,
      [CancelAction.name]: this.STATUS_CANCEL,
      [DenyAction.name]: this.STATUS_CANCEL,
      [ResponseAction.name]: null,
    };

    return map[action];
  }

  public setStatus(status: string) {
    const availableStatuses = [
      this.STATUS_NEW,
      this.STATUS_IN_PROGRESS,
      this.STATUS_CANCEL,
      this.STATUS_COMPLETE,
      this.STATUS_EXPIRED,
    ];

    if (availableStatuses.includes(status)) {
      this.status = status;
    }
  }

  private roleAllowedActions() {
    const map = {
      [this.ROLE_CLIENT]: [CancelAction.name, CompleteAction.name],
      [this.ROLE_PERFORMER]: [ResponseAction.name, DenyAction.name],
    };

    return map;
  }

  private statusAllowedActions() {
    const map = {
      [this.STATUS_CANCEL]: [],
      [this.STATUS_COMPLETE]: [],
      [this.STATUS_IN_PROGRESS]: [DenyAction.name, CompleteAction.name],
      [this.STATUS_NEW]: [CancelAction.name, ResponseAction.name],
      [this.STATUS_EXPIRED]: [],
    };

    return map;
  }

  private getStatusMap() {
    const map = {
      [this.STATUS_NEW]: [this.STATUS_EXPIRED, this.STATUS_CANCEL],
      [this.STATUS_IN_PROGRESS]: [this.STATUS_CANCEL, this.STATUS_COMPLETE],
      [this.STATUS_CANCEL]: [],
      [this.STATUS_COMPLETE]: [],
      [this.STATUS_EXPIRED]: [this.STATUS_CANCEL],
    };

    return map;
  }
}
