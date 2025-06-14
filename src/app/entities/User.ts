import { randomUUID } from "node:crypto";
import { Replace } from "../../Helpers/Replace";
import { RoleType } from "../../utils/role-type";

export interface UserSchema {
  role: RoleType;
  fullName: string;
  cpfCnpj: string;
  email: string;
  password: string;
  balance: number;
  dtcreated: Date;
  dtupdated?: Date;
}

export class User {
  private _id: string;
  private props: UserSchema;

  constructor(
    props: Replace<
      UserSchema, {
        dtcreated?: Date,
        dtupdated?: Date | undefined
      }>,
    id?: string) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
      role: props.role || RoleType.COMUM,
      balance: props.balance || 0,
      dtcreated: props.dtcreated || new Date(),
      dtupdated: props.dtupdated || new Date(),
    };
  }

  get id(): string {
    return this._id;
  }
  get role(): RoleType {
    return this.props.role;
  }
  get fullName(): string {
    return this.props.fullName;
  }
  get cpfCnpj(): string {
    return this.props.cpfCnpj;
  }
  get email(): string {
    return this.props.email;
  }
  get password(): string {
    return this.props.password;
  }
  get balance(): number {
    return this.props.balance;
  }
  get dtcreated(): Date {
    return this.props.dtcreated;
  }
  get dtupdated(): Date | undefined {
    return this.props.dtupdated;
  }
  set dtupdated(dtupdated: Date | undefined) {
    this.props.dtupdated = dtupdated;
  }
  set password(password: string) {
    this.props.password = password;
  }
  set email(email: string) {
    this.props.email = email;
  }
  set fullName(fullName: string) {
    this.props.fullName = fullName;
  }
  set cpfCnpj(cpfCnpj: string) {
    this.props.cpfCnpj = cpfCnpj;
  }
  set balance(balance: number) {
    this.props.balance = balance;
  }
  set role(role: RoleType) {
    this.props.role = role;
  }
}