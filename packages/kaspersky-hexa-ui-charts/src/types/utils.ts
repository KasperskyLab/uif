export type OptionalProperty<Obj, Prop extends keyof Obj> = Partial<
  Pick<Obj, Prop>
> &
  Omit<Obj, Prop>;
