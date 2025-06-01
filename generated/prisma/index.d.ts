
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model EventAttendee
 * 
 */
export type EventAttendee = $Result.DefaultSelection<Prisma.$EventAttendeePayload>
/**
 * Model EventScanner
 * 
 */
export type EventScanner = $Result.DefaultSelection<Prisma.$EventScannerPayload>
/**
 * Model EventMedia
 * 
 */
export type EventMedia = $Result.DefaultSelection<Prisma.$EventMediaPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eventAttendee`: Exposes CRUD operations for the **EventAttendee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventAttendees
    * const eventAttendees = await prisma.eventAttendee.findMany()
    * ```
    */
  get eventAttendee(): Prisma.EventAttendeeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eventScanner`: Exposes CRUD operations for the **EventScanner** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventScanners
    * const eventScanners = await prisma.eventScanner.findMany()
    * ```
    */
  get eventScanner(): Prisma.EventScannerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.eventMedia`: Exposes CRUD operations for the **EventMedia** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EventMedias
    * const eventMedias = await prisma.eventMedia.findMany()
    * ```
    */
  get eventMedia(): Prisma.EventMediaDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Event: 'Event',
    EventAttendee: 'EventAttendee',
    EventScanner: 'EventScanner',
    EventMedia: 'EventMedia'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "event" | "eventAttendee" | "eventScanner" | "eventMedia"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
      EventAttendee: {
        payload: Prisma.$EventAttendeePayload<ExtArgs>
        fields: Prisma.EventAttendeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventAttendeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventAttendeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventAttendeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventAttendeePayload>
          }
          findFirst: {
            args: Prisma.EventAttendeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventAttendeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventAttendeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventAttendeePayload>
          }
          findMany: {
            args: Prisma.EventAttendeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventAttendeePayload>[]
          }
          create: {
            args: Prisma.EventAttendeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventAttendeePayload>
          }
          createMany: {
            args: Prisma.EventAttendeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventAttendeeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventAttendeePayload>[]
          }
          delete: {
            args: Prisma.EventAttendeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventAttendeePayload>
          }
          update: {
            args: Prisma.EventAttendeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventAttendeePayload>
          }
          deleteMany: {
            args: Prisma.EventAttendeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventAttendeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventAttendeeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventAttendeePayload>[]
          }
          upsert: {
            args: Prisma.EventAttendeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventAttendeePayload>
          }
          aggregate: {
            args: Prisma.EventAttendeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventAttendee>
          }
          groupBy: {
            args: Prisma.EventAttendeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventAttendeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventAttendeeCountArgs<ExtArgs>
            result: $Utils.Optional<EventAttendeeCountAggregateOutputType> | number
          }
        }
      }
      EventScanner: {
        payload: Prisma.$EventScannerPayload<ExtArgs>
        fields: Prisma.EventScannerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventScannerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventScannerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventScannerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventScannerPayload>
          }
          findFirst: {
            args: Prisma.EventScannerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventScannerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventScannerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventScannerPayload>
          }
          findMany: {
            args: Prisma.EventScannerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventScannerPayload>[]
          }
          create: {
            args: Prisma.EventScannerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventScannerPayload>
          }
          createMany: {
            args: Prisma.EventScannerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventScannerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventScannerPayload>[]
          }
          delete: {
            args: Prisma.EventScannerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventScannerPayload>
          }
          update: {
            args: Prisma.EventScannerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventScannerPayload>
          }
          deleteMany: {
            args: Prisma.EventScannerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventScannerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventScannerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventScannerPayload>[]
          }
          upsert: {
            args: Prisma.EventScannerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventScannerPayload>
          }
          aggregate: {
            args: Prisma.EventScannerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventScanner>
          }
          groupBy: {
            args: Prisma.EventScannerGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventScannerGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventScannerCountArgs<ExtArgs>
            result: $Utils.Optional<EventScannerCountAggregateOutputType> | number
          }
        }
      }
      EventMedia: {
        payload: Prisma.$EventMediaPayload<ExtArgs>
        fields: Prisma.EventMediaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventMediaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventMediaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventMediaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventMediaPayload>
          }
          findFirst: {
            args: Prisma.EventMediaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventMediaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventMediaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventMediaPayload>
          }
          findMany: {
            args: Prisma.EventMediaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventMediaPayload>[]
          }
          create: {
            args: Prisma.EventMediaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventMediaPayload>
          }
          createMany: {
            args: Prisma.EventMediaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventMediaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventMediaPayload>[]
          }
          delete: {
            args: Prisma.EventMediaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventMediaPayload>
          }
          update: {
            args: Prisma.EventMediaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventMediaPayload>
          }
          deleteMany: {
            args: Prisma.EventMediaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventMediaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EventMediaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventMediaPayload>[]
          }
          upsert: {
            args: Prisma.EventMediaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventMediaPayload>
          }
          aggregate: {
            args: Prisma.EventMediaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEventMedia>
          }
          groupBy: {
            args: Prisma.EventMediaGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventMediaGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventMediaCountArgs<ExtArgs>
            result: $Utils.Optional<EventMediaCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    event?: EventOmit
    eventAttendee?: EventAttendeeOmit
    eventScanner?: EventScannerOmit
    eventMedia?: EventMediaOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Event: number
    EventAttendee: number
    assigned_events: number
    scanned_events: number
    EventMedia: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Event?: boolean | UserCountOutputTypeCountEventArgs
    EventAttendee?: boolean | UserCountOutputTypeCountEventAttendeeArgs
    assigned_events?: boolean | UserCountOutputTypeCountAssigned_eventsArgs
    scanned_events?: boolean | UserCountOutputTypeCountScanned_eventsArgs
    EventMedia?: boolean | UserCountOutputTypeCountEventMediaArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEventAttendeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventAttendeeWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAssigned_eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventScannerWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountScanned_eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventScannerWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEventMediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventMediaWhereInput
  }


  /**
   * Count Type EventCountOutputType
   */

  export type EventCountOutputType = {
    EventAttendee: number
    EventScanner: number
    EventMedia: number
  }

  export type EventCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    EventAttendee?: boolean | EventCountOutputTypeCountEventAttendeeArgs
    EventScanner?: boolean | EventCountOutputTypeCountEventScannerArgs
    EventMedia?: boolean | EventCountOutputTypeCountEventMediaArgs
  }

  // Custom InputTypes
  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCountOutputType
     */
    select?: EventCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountEventAttendeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventAttendeeWhereInput
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountEventScannerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventScannerWhereInput
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountEventMediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventMediaWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    first_name: string | null
    last_name: string | null
    password: string | null
    created_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    first_name: string | null
    last_name: string | null
    password: string | null
    created_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    first_name: number
    last_name: number
    password: number
    created_at: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    first_name?: true
    last_name?: true
    password?: true
    created_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    first_name?: true
    last_name?: true
    password?: true
    created_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    first_name?: true
    last_name?: true
    password?: true
    created_at?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    first_name: string
    last_name: string
    password: string
    created_at: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    first_name?: boolean
    last_name?: boolean
    password?: boolean
    created_at?: boolean
    Event?: boolean | User$EventArgs<ExtArgs>
    EventAttendee?: boolean | User$EventAttendeeArgs<ExtArgs>
    assigned_events?: boolean | User$assigned_eventsArgs<ExtArgs>
    scanned_events?: boolean | User$scanned_eventsArgs<ExtArgs>
    EventMedia?: boolean | User$EventMediaArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    first_name?: boolean
    last_name?: boolean
    password?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    first_name?: boolean
    last_name?: boolean
    password?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    first_name?: boolean
    last_name?: boolean
    password?: boolean
    created_at?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "first_name" | "last_name" | "password" | "created_at", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Event?: boolean | User$EventArgs<ExtArgs>
    EventAttendee?: boolean | User$EventAttendeeArgs<ExtArgs>
    assigned_events?: boolean | User$assigned_eventsArgs<ExtArgs>
    scanned_events?: boolean | User$scanned_eventsArgs<ExtArgs>
    EventMedia?: boolean | User$EventMediaArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Event: Prisma.$EventPayload<ExtArgs>[]
      EventAttendee: Prisma.$EventAttendeePayload<ExtArgs>[]
      assigned_events: Prisma.$EventScannerPayload<ExtArgs>[]
      scanned_events: Prisma.$EventScannerPayload<ExtArgs>[]
      EventMedia: Prisma.$EventMediaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      first_name: string
      last_name: string
      password: string
      created_at: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Event<T extends User$EventArgs<ExtArgs> = {}>(args?: Subset<T, User$EventArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    EventAttendee<T extends User$EventAttendeeArgs<ExtArgs> = {}>(args?: Subset<T, User$EventAttendeeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventAttendeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assigned_events<T extends User$assigned_eventsArgs<ExtArgs> = {}>(args?: Subset<T, User$assigned_eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventScannerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    scanned_events<T extends User$scanned_eventsArgs<ExtArgs> = {}>(args?: Subset<T, User$scanned_eventsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventScannerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    EventMedia<T extends User$EventMediaArgs<ExtArgs> = {}>(args?: Subset<T, User$EventMediaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventMediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly first_name: FieldRef<"User", 'String'>
    readonly last_name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly created_at: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.Event
   */
  export type User$EventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    cursor?: EventWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * User.EventAttendee
   */
  export type User$EventAttendeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAttendee
     */
    select?: EventAttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventAttendee
     */
    omit?: EventAttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAttendeeInclude<ExtArgs> | null
    where?: EventAttendeeWhereInput
    orderBy?: EventAttendeeOrderByWithRelationInput | EventAttendeeOrderByWithRelationInput[]
    cursor?: EventAttendeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventAttendeeScalarFieldEnum | EventAttendeeScalarFieldEnum[]
  }

  /**
   * User.assigned_events
   */
  export type User$assigned_eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventScanner
     */
    select?: EventScannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventScanner
     */
    omit?: EventScannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventScannerInclude<ExtArgs> | null
    where?: EventScannerWhereInput
    orderBy?: EventScannerOrderByWithRelationInput | EventScannerOrderByWithRelationInput[]
    cursor?: EventScannerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScannerScalarFieldEnum | EventScannerScalarFieldEnum[]
  }

  /**
   * User.scanned_events
   */
  export type User$scanned_eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventScanner
     */
    select?: EventScannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventScanner
     */
    omit?: EventScannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventScannerInclude<ExtArgs> | null
    where?: EventScannerWhereInput
    orderBy?: EventScannerOrderByWithRelationInput | EventScannerOrderByWithRelationInput[]
    cursor?: EventScannerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScannerScalarFieldEnum | EventScannerScalarFieldEnum[]
  }

  /**
   * User.EventMedia
   */
  export type User$EventMediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventMedia
     */
    select?: EventMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventMedia
     */
    omit?: EventMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventMediaInclude<ExtArgs> | null
    where?: EventMediaWhereInput
    orderBy?: EventMediaOrderByWithRelationInput | EventMediaOrderByWithRelationInput[]
    cursor?: EventMediaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventMediaScalarFieldEnum | EventMediaScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    start_time: Date | null
    end_time: Date | null
    location: string | null
    created_at: Date | null
    creator_id: string | null
  }

  export type EventMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    start_time: Date | null
    end_time: Date | null
    location: string | null
    created_at: Date | null
    creator_id: string | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    name: number
    description: number
    start_time: number
    end_time: number
    location: number
    created_at: number
    creator_id: number
    _all: number
  }


  export type EventMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    start_time?: true
    end_time?: true
    location?: true
    created_at?: true
    creator_id?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    start_time?: true
    end_time?: true
    location?: true
    created_at?: true
    creator_id?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    start_time?: true
    end_time?: true
    location?: true
    created_at?: true
    creator_id?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: string
    name: string
    description: string | null
    start_time: Date
    end_time: Date
    location: string | null
    created_at: Date
    creator_id: string
    _count: EventCountAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    start_time?: boolean
    end_time?: boolean
    location?: boolean
    created_at?: boolean
    creator_id?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
    EventAttendee?: boolean | Event$EventAttendeeArgs<ExtArgs>
    EventScanner?: boolean | Event$EventScannerArgs<ExtArgs>
    EventMedia?: boolean | Event$EventMediaArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    start_time?: boolean
    end_time?: boolean
    location?: boolean
    created_at?: boolean
    creator_id?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    start_time?: boolean
    end_time?: boolean
    location?: boolean
    created_at?: boolean
    creator_id?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    start_time?: boolean
    end_time?: boolean
    location?: boolean
    created_at?: boolean
    creator_id?: boolean
  }

  export type EventOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "start_time" | "end_time" | "location" | "created_at" | "creator_id", ExtArgs["result"]["event"]>
  export type EventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
    EventAttendee?: boolean | Event$EventAttendeeArgs<ExtArgs>
    EventScanner?: boolean | Event$EventScannerArgs<ExtArgs>
    EventMedia?: boolean | Event$EventMediaArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EventIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {
      creator: Prisma.$UserPayload<ExtArgs>
      EventAttendee: Prisma.$EventAttendeePayload<ExtArgs>[]
      EventScanner: Prisma.$EventScannerPayload<ExtArgs>[]
      EventMedia: Prisma.$EventMediaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      start_time: Date
      end_time: Date
      location: string | null
      created_at: Date
      creator_id: string
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {EventCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventCreateManyAndReturnArgs>(args?: SelectSubset<T, EventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events and returns the data updated in the database.
     * @param {EventUpdateManyAndReturnArgs} args - Arguments to update many Events.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EventUpdateManyAndReturnArgs>(args: SelectSubset<T, EventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    EventAttendee<T extends Event$EventAttendeeArgs<ExtArgs> = {}>(args?: Subset<T, Event$EventAttendeeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventAttendeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    EventScanner<T extends Event$EventScannerArgs<ExtArgs> = {}>(args?: Subset<T, Event$EventScannerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventScannerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    EventMedia<T extends Event$EventMediaArgs<ExtArgs> = {}>(args?: Subset<T, Event$EventMediaArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventMediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Event model
   */
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'String'>
    readonly name: FieldRef<"Event", 'String'>
    readonly description: FieldRef<"Event", 'String'>
    readonly start_time: FieldRef<"Event", 'DateTime'>
    readonly end_time: FieldRef<"Event", 'DateTime'>
    readonly location: FieldRef<"Event", 'String'>
    readonly created_at: FieldRef<"Event", 'DateTime'>
    readonly creator_id: FieldRef<"Event", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event createManyAndReturn
   */
  export type EventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
  }

  /**
   * Event updateManyAndReturn
   */
  export type EventUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
    /**
     * Limit how many Events to delete.
     */
    limit?: number
  }

  /**
   * Event.EventAttendee
   */
  export type Event$EventAttendeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAttendee
     */
    select?: EventAttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventAttendee
     */
    omit?: EventAttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAttendeeInclude<ExtArgs> | null
    where?: EventAttendeeWhereInput
    orderBy?: EventAttendeeOrderByWithRelationInput | EventAttendeeOrderByWithRelationInput[]
    cursor?: EventAttendeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventAttendeeScalarFieldEnum | EventAttendeeScalarFieldEnum[]
  }

  /**
   * Event.EventScanner
   */
  export type Event$EventScannerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventScanner
     */
    select?: EventScannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventScanner
     */
    omit?: EventScannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventScannerInclude<ExtArgs> | null
    where?: EventScannerWhereInput
    orderBy?: EventScannerOrderByWithRelationInput | EventScannerOrderByWithRelationInput[]
    cursor?: EventScannerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventScannerScalarFieldEnum | EventScannerScalarFieldEnum[]
  }

  /**
   * Event.EventMedia
   */
  export type Event$EventMediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventMedia
     */
    select?: EventMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventMedia
     */
    omit?: EventMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventMediaInclude<ExtArgs> | null
    where?: EventMediaWhereInput
    orderBy?: EventMediaOrderByWithRelationInput | EventMediaOrderByWithRelationInput[]
    cursor?: EventMediaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EventMediaScalarFieldEnum | EventMediaScalarFieldEnum[]
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Event
     */
    omit?: EventOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
  }


  /**
   * Model EventAttendee
   */

  export type AggregateEventAttendee = {
    _count: EventAttendeeCountAggregateOutputType | null
    _min: EventAttendeeMinAggregateOutputType | null
    _max: EventAttendeeMaxAggregateOutputType | null
  }

  export type EventAttendeeMinAggregateOutputType = {
    id: string | null
    event_id: string | null
    user_id: string | null
    registered_at: Date | null
    ticket_qr: string | null
    status: string | null
    ticket_used: Date | null
  }

  export type EventAttendeeMaxAggregateOutputType = {
    id: string | null
    event_id: string | null
    user_id: string | null
    registered_at: Date | null
    ticket_qr: string | null
    status: string | null
    ticket_used: Date | null
  }

  export type EventAttendeeCountAggregateOutputType = {
    id: number
    event_id: number
    user_id: number
    registered_at: number
    ticket_qr: number
    status: number
    ticket_used: number
    _all: number
  }


  export type EventAttendeeMinAggregateInputType = {
    id?: true
    event_id?: true
    user_id?: true
    registered_at?: true
    ticket_qr?: true
    status?: true
    ticket_used?: true
  }

  export type EventAttendeeMaxAggregateInputType = {
    id?: true
    event_id?: true
    user_id?: true
    registered_at?: true
    ticket_qr?: true
    status?: true
    ticket_used?: true
  }

  export type EventAttendeeCountAggregateInputType = {
    id?: true
    event_id?: true
    user_id?: true
    registered_at?: true
    ticket_qr?: true
    status?: true
    ticket_used?: true
    _all?: true
  }

  export type EventAttendeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventAttendee to aggregate.
     */
    where?: EventAttendeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventAttendees to fetch.
     */
    orderBy?: EventAttendeeOrderByWithRelationInput | EventAttendeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventAttendeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventAttendees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventAttendees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventAttendees
    **/
    _count?: true | EventAttendeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventAttendeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventAttendeeMaxAggregateInputType
  }

  export type GetEventAttendeeAggregateType<T extends EventAttendeeAggregateArgs> = {
        [P in keyof T & keyof AggregateEventAttendee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventAttendee[P]>
      : GetScalarType<T[P], AggregateEventAttendee[P]>
  }




  export type EventAttendeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventAttendeeWhereInput
    orderBy?: EventAttendeeOrderByWithAggregationInput | EventAttendeeOrderByWithAggregationInput[]
    by: EventAttendeeScalarFieldEnum[] | EventAttendeeScalarFieldEnum
    having?: EventAttendeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventAttendeeCountAggregateInputType | true
    _min?: EventAttendeeMinAggregateInputType
    _max?: EventAttendeeMaxAggregateInputType
  }

  export type EventAttendeeGroupByOutputType = {
    id: string
    event_id: string
    user_id: string
    registered_at: Date
    ticket_qr: string | null
    status: string
    ticket_used: Date | null
    _count: EventAttendeeCountAggregateOutputType | null
    _min: EventAttendeeMinAggregateOutputType | null
    _max: EventAttendeeMaxAggregateOutputType | null
  }

  type GetEventAttendeeGroupByPayload<T extends EventAttendeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventAttendeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventAttendeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventAttendeeGroupByOutputType[P]>
            : GetScalarType<T[P], EventAttendeeGroupByOutputType[P]>
        }
      >
    >


  export type EventAttendeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event_id?: boolean
    user_id?: boolean
    registered_at?: boolean
    ticket_qr?: boolean
    status?: boolean
    ticket_used?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventAttendee"]>

  export type EventAttendeeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event_id?: boolean
    user_id?: boolean
    registered_at?: boolean
    ticket_qr?: boolean
    status?: boolean
    ticket_used?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventAttendee"]>

  export type EventAttendeeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event_id?: boolean
    user_id?: boolean
    registered_at?: boolean
    ticket_qr?: boolean
    status?: boolean
    ticket_used?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventAttendee"]>

  export type EventAttendeeSelectScalar = {
    id?: boolean
    event_id?: boolean
    user_id?: boolean
    registered_at?: boolean
    ticket_qr?: boolean
    status?: boolean
    ticket_used?: boolean
  }

  export type EventAttendeeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "event_id" | "user_id" | "registered_at" | "ticket_qr" | "status" | "ticket_used", ExtArgs["result"]["eventAttendee"]>
  export type EventAttendeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EventAttendeeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EventAttendeeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EventAttendeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EventAttendee"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      event_id: string
      user_id: string
      registered_at: Date
      ticket_qr: string | null
      status: string
      ticket_used: Date | null
    }, ExtArgs["result"]["eventAttendee"]>
    composites: {}
  }

  type EventAttendeeGetPayload<S extends boolean | null | undefined | EventAttendeeDefaultArgs> = $Result.GetResult<Prisma.$EventAttendeePayload, S>

  type EventAttendeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventAttendeeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventAttendeeCountAggregateInputType | true
    }

  export interface EventAttendeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EventAttendee'], meta: { name: 'EventAttendee' } }
    /**
     * Find zero or one EventAttendee that matches the filter.
     * @param {EventAttendeeFindUniqueArgs} args - Arguments to find a EventAttendee
     * @example
     * // Get one EventAttendee
     * const eventAttendee = await prisma.eventAttendee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventAttendeeFindUniqueArgs>(args: SelectSubset<T, EventAttendeeFindUniqueArgs<ExtArgs>>): Prisma__EventAttendeeClient<$Result.GetResult<Prisma.$EventAttendeePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EventAttendee that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventAttendeeFindUniqueOrThrowArgs} args - Arguments to find a EventAttendee
     * @example
     * // Get one EventAttendee
     * const eventAttendee = await prisma.eventAttendee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventAttendeeFindUniqueOrThrowArgs>(args: SelectSubset<T, EventAttendeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventAttendeeClient<$Result.GetResult<Prisma.$EventAttendeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventAttendee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAttendeeFindFirstArgs} args - Arguments to find a EventAttendee
     * @example
     * // Get one EventAttendee
     * const eventAttendee = await prisma.eventAttendee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventAttendeeFindFirstArgs>(args?: SelectSubset<T, EventAttendeeFindFirstArgs<ExtArgs>>): Prisma__EventAttendeeClient<$Result.GetResult<Prisma.$EventAttendeePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventAttendee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAttendeeFindFirstOrThrowArgs} args - Arguments to find a EventAttendee
     * @example
     * // Get one EventAttendee
     * const eventAttendee = await prisma.eventAttendee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventAttendeeFindFirstOrThrowArgs>(args?: SelectSubset<T, EventAttendeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventAttendeeClient<$Result.GetResult<Prisma.$EventAttendeePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EventAttendees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAttendeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventAttendees
     * const eventAttendees = await prisma.eventAttendee.findMany()
     * 
     * // Get first 10 EventAttendees
     * const eventAttendees = await prisma.eventAttendee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventAttendeeWithIdOnly = await prisma.eventAttendee.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventAttendeeFindManyArgs>(args?: SelectSubset<T, EventAttendeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventAttendeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EventAttendee.
     * @param {EventAttendeeCreateArgs} args - Arguments to create a EventAttendee.
     * @example
     * // Create one EventAttendee
     * const EventAttendee = await prisma.eventAttendee.create({
     *   data: {
     *     // ... data to create a EventAttendee
     *   }
     * })
     * 
     */
    create<T extends EventAttendeeCreateArgs>(args: SelectSubset<T, EventAttendeeCreateArgs<ExtArgs>>): Prisma__EventAttendeeClient<$Result.GetResult<Prisma.$EventAttendeePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EventAttendees.
     * @param {EventAttendeeCreateManyArgs} args - Arguments to create many EventAttendees.
     * @example
     * // Create many EventAttendees
     * const eventAttendee = await prisma.eventAttendee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventAttendeeCreateManyArgs>(args?: SelectSubset<T, EventAttendeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EventAttendees and returns the data saved in the database.
     * @param {EventAttendeeCreateManyAndReturnArgs} args - Arguments to create many EventAttendees.
     * @example
     * // Create many EventAttendees
     * const eventAttendee = await prisma.eventAttendee.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EventAttendees and only return the `id`
     * const eventAttendeeWithIdOnly = await prisma.eventAttendee.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventAttendeeCreateManyAndReturnArgs>(args?: SelectSubset<T, EventAttendeeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventAttendeePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EventAttendee.
     * @param {EventAttendeeDeleteArgs} args - Arguments to delete one EventAttendee.
     * @example
     * // Delete one EventAttendee
     * const EventAttendee = await prisma.eventAttendee.delete({
     *   where: {
     *     // ... filter to delete one EventAttendee
     *   }
     * })
     * 
     */
    delete<T extends EventAttendeeDeleteArgs>(args: SelectSubset<T, EventAttendeeDeleteArgs<ExtArgs>>): Prisma__EventAttendeeClient<$Result.GetResult<Prisma.$EventAttendeePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EventAttendee.
     * @param {EventAttendeeUpdateArgs} args - Arguments to update one EventAttendee.
     * @example
     * // Update one EventAttendee
     * const eventAttendee = await prisma.eventAttendee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventAttendeeUpdateArgs>(args: SelectSubset<T, EventAttendeeUpdateArgs<ExtArgs>>): Prisma__EventAttendeeClient<$Result.GetResult<Prisma.$EventAttendeePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EventAttendees.
     * @param {EventAttendeeDeleteManyArgs} args - Arguments to filter EventAttendees to delete.
     * @example
     * // Delete a few EventAttendees
     * const { count } = await prisma.eventAttendee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventAttendeeDeleteManyArgs>(args?: SelectSubset<T, EventAttendeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventAttendees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAttendeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventAttendees
     * const eventAttendee = await prisma.eventAttendee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventAttendeeUpdateManyArgs>(args: SelectSubset<T, EventAttendeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventAttendees and returns the data updated in the database.
     * @param {EventAttendeeUpdateManyAndReturnArgs} args - Arguments to update many EventAttendees.
     * @example
     * // Update many EventAttendees
     * const eventAttendee = await prisma.eventAttendee.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EventAttendees and only return the `id`
     * const eventAttendeeWithIdOnly = await prisma.eventAttendee.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EventAttendeeUpdateManyAndReturnArgs>(args: SelectSubset<T, EventAttendeeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventAttendeePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EventAttendee.
     * @param {EventAttendeeUpsertArgs} args - Arguments to update or create a EventAttendee.
     * @example
     * // Update or create a EventAttendee
     * const eventAttendee = await prisma.eventAttendee.upsert({
     *   create: {
     *     // ... data to create a EventAttendee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventAttendee we want to update
     *   }
     * })
     */
    upsert<T extends EventAttendeeUpsertArgs>(args: SelectSubset<T, EventAttendeeUpsertArgs<ExtArgs>>): Prisma__EventAttendeeClient<$Result.GetResult<Prisma.$EventAttendeePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EventAttendees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAttendeeCountArgs} args - Arguments to filter EventAttendees to count.
     * @example
     * // Count the number of EventAttendees
     * const count = await prisma.eventAttendee.count({
     *   where: {
     *     // ... the filter for the EventAttendees we want to count
     *   }
     * })
    **/
    count<T extends EventAttendeeCountArgs>(
      args?: Subset<T, EventAttendeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventAttendeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventAttendee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAttendeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventAttendeeAggregateArgs>(args: Subset<T, EventAttendeeAggregateArgs>): Prisma.PrismaPromise<GetEventAttendeeAggregateType<T>>

    /**
     * Group by EventAttendee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAttendeeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventAttendeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventAttendeeGroupByArgs['orderBy'] }
        : { orderBy?: EventAttendeeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventAttendeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventAttendeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EventAttendee model
   */
  readonly fields: EventAttendeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventAttendee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventAttendeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EventAttendee model
   */
  interface EventAttendeeFieldRefs {
    readonly id: FieldRef<"EventAttendee", 'String'>
    readonly event_id: FieldRef<"EventAttendee", 'String'>
    readonly user_id: FieldRef<"EventAttendee", 'String'>
    readonly registered_at: FieldRef<"EventAttendee", 'DateTime'>
    readonly ticket_qr: FieldRef<"EventAttendee", 'String'>
    readonly status: FieldRef<"EventAttendee", 'String'>
    readonly ticket_used: FieldRef<"EventAttendee", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EventAttendee findUnique
   */
  export type EventAttendeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAttendee
     */
    select?: EventAttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventAttendee
     */
    omit?: EventAttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAttendeeInclude<ExtArgs> | null
    /**
     * Filter, which EventAttendee to fetch.
     */
    where: EventAttendeeWhereUniqueInput
  }

  /**
   * EventAttendee findUniqueOrThrow
   */
  export type EventAttendeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAttendee
     */
    select?: EventAttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventAttendee
     */
    omit?: EventAttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAttendeeInclude<ExtArgs> | null
    /**
     * Filter, which EventAttendee to fetch.
     */
    where: EventAttendeeWhereUniqueInput
  }

  /**
   * EventAttendee findFirst
   */
  export type EventAttendeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAttendee
     */
    select?: EventAttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventAttendee
     */
    omit?: EventAttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAttendeeInclude<ExtArgs> | null
    /**
     * Filter, which EventAttendee to fetch.
     */
    where?: EventAttendeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventAttendees to fetch.
     */
    orderBy?: EventAttendeeOrderByWithRelationInput | EventAttendeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventAttendees.
     */
    cursor?: EventAttendeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventAttendees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventAttendees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventAttendees.
     */
    distinct?: EventAttendeeScalarFieldEnum | EventAttendeeScalarFieldEnum[]
  }

  /**
   * EventAttendee findFirstOrThrow
   */
  export type EventAttendeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAttendee
     */
    select?: EventAttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventAttendee
     */
    omit?: EventAttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAttendeeInclude<ExtArgs> | null
    /**
     * Filter, which EventAttendee to fetch.
     */
    where?: EventAttendeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventAttendees to fetch.
     */
    orderBy?: EventAttendeeOrderByWithRelationInput | EventAttendeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventAttendees.
     */
    cursor?: EventAttendeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventAttendees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventAttendees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventAttendees.
     */
    distinct?: EventAttendeeScalarFieldEnum | EventAttendeeScalarFieldEnum[]
  }

  /**
   * EventAttendee findMany
   */
  export type EventAttendeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAttendee
     */
    select?: EventAttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventAttendee
     */
    omit?: EventAttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAttendeeInclude<ExtArgs> | null
    /**
     * Filter, which EventAttendees to fetch.
     */
    where?: EventAttendeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventAttendees to fetch.
     */
    orderBy?: EventAttendeeOrderByWithRelationInput | EventAttendeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventAttendees.
     */
    cursor?: EventAttendeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventAttendees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventAttendees.
     */
    skip?: number
    distinct?: EventAttendeeScalarFieldEnum | EventAttendeeScalarFieldEnum[]
  }

  /**
   * EventAttendee create
   */
  export type EventAttendeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAttendee
     */
    select?: EventAttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventAttendee
     */
    omit?: EventAttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAttendeeInclude<ExtArgs> | null
    /**
     * The data needed to create a EventAttendee.
     */
    data: XOR<EventAttendeeCreateInput, EventAttendeeUncheckedCreateInput>
  }

  /**
   * EventAttendee createMany
   */
  export type EventAttendeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventAttendees.
     */
    data: EventAttendeeCreateManyInput | EventAttendeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventAttendee createManyAndReturn
   */
  export type EventAttendeeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAttendee
     */
    select?: EventAttendeeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventAttendee
     */
    omit?: EventAttendeeOmit<ExtArgs> | null
    /**
     * The data used to create many EventAttendees.
     */
    data: EventAttendeeCreateManyInput | EventAttendeeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAttendeeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventAttendee update
   */
  export type EventAttendeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAttendee
     */
    select?: EventAttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventAttendee
     */
    omit?: EventAttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAttendeeInclude<ExtArgs> | null
    /**
     * The data needed to update a EventAttendee.
     */
    data: XOR<EventAttendeeUpdateInput, EventAttendeeUncheckedUpdateInput>
    /**
     * Choose, which EventAttendee to update.
     */
    where: EventAttendeeWhereUniqueInput
  }

  /**
   * EventAttendee updateMany
   */
  export type EventAttendeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EventAttendees.
     */
    data: XOR<EventAttendeeUpdateManyMutationInput, EventAttendeeUncheckedUpdateManyInput>
    /**
     * Filter which EventAttendees to update
     */
    where?: EventAttendeeWhereInput
    /**
     * Limit how many EventAttendees to update.
     */
    limit?: number
  }

  /**
   * EventAttendee updateManyAndReturn
   */
  export type EventAttendeeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAttendee
     */
    select?: EventAttendeeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventAttendee
     */
    omit?: EventAttendeeOmit<ExtArgs> | null
    /**
     * The data used to update EventAttendees.
     */
    data: XOR<EventAttendeeUpdateManyMutationInput, EventAttendeeUncheckedUpdateManyInput>
    /**
     * Filter which EventAttendees to update
     */
    where?: EventAttendeeWhereInput
    /**
     * Limit how many EventAttendees to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAttendeeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventAttendee upsert
   */
  export type EventAttendeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAttendee
     */
    select?: EventAttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventAttendee
     */
    omit?: EventAttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAttendeeInclude<ExtArgs> | null
    /**
     * The filter to search for the EventAttendee to update in case it exists.
     */
    where: EventAttendeeWhereUniqueInput
    /**
     * In case the EventAttendee found by the `where` argument doesn't exist, create a new EventAttendee with this data.
     */
    create: XOR<EventAttendeeCreateInput, EventAttendeeUncheckedCreateInput>
    /**
     * In case the EventAttendee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventAttendeeUpdateInput, EventAttendeeUncheckedUpdateInput>
  }

  /**
   * EventAttendee delete
   */
  export type EventAttendeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAttendee
     */
    select?: EventAttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventAttendee
     */
    omit?: EventAttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAttendeeInclude<ExtArgs> | null
    /**
     * Filter which EventAttendee to delete.
     */
    where: EventAttendeeWhereUniqueInput
  }

  /**
   * EventAttendee deleteMany
   */
  export type EventAttendeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventAttendees to delete
     */
    where?: EventAttendeeWhereInput
    /**
     * Limit how many EventAttendees to delete.
     */
    limit?: number
  }

  /**
   * EventAttendee without action
   */
  export type EventAttendeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventAttendee
     */
    select?: EventAttendeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventAttendee
     */
    omit?: EventAttendeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventAttendeeInclude<ExtArgs> | null
  }


  /**
   * Model EventScanner
   */

  export type AggregateEventScanner = {
    _count: EventScannerCountAggregateOutputType | null
    _min: EventScannerMinAggregateOutputType | null
    _max: EventScannerMaxAggregateOutputType | null
  }

  export type EventScannerMinAggregateOutputType = {
    id: string | null
    event_id: string | null
    user_id: string | null
    assigner_id: string | null
    created_at: Date | null
  }

  export type EventScannerMaxAggregateOutputType = {
    id: string | null
    event_id: string | null
    user_id: string | null
    assigner_id: string | null
    created_at: Date | null
  }

  export type EventScannerCountAggregateOutputType = {
    id: number
    event_id: number
    user_id: number
    assigner_id: number
    created_at: number
    _all: number
  }


  export type EventScannerMinAggregateInputType = {
    id?: true
    event_id?: true
    user_id?: true
    assigner_id?: true
    created_at?: true
  }

  export type EventScannerMaxAggregateInputType = {
    id?: true
    event_id?: true
    user_id?: true
    assigner_id?: true
    created_at?: true
  }

  export type EventScannerCountAggregateInputType = {
    id?: true
    event_id?: true
    user_id?: true
    assigner_id?: true
    created_at?: true
    _all?: true
  }

  export type EventScannerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventScanner to aggregate.
     */
    where?: EventScannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventScanners to fetch.
     */
    orderBy?: EventScannerOrderByWithRelationInput | EventScannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventScannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventScanners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventScanners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventScanners
    **/
    _count?: true | EventScannerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventScannerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventScannerMaxAggregateInputType
  }

  export type GetEventScannerAggregateType<T extends EventScannerAggregateArgs> = {
        [P in keyof T & keyof AggregateEventScanner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventScanner[P]>
      : GetScalarType<T[P], AggregateEventScanner[P]>
  }




  export type EventScannerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventScannerWhereInput
    orderBy?: EventScannerOrderByWithAggregationInput | EventScannerOrderByWithAggregationInput[]
    by: EventScannerScalarFieldEnum[] | EventScannerScalarFieldEnum
    having?: EventScannerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventScannerCountAggregateInputType | true
    _min?: EventScannerMinAggregateInputType
    _max?: EventScannerMaxAggregateInputType
  }

  export type EventScannerGroupByOutputType = {
    id: string
    event_id: string
    user_id: string
    assigner_id: string
    created_at: Date
    _count: EventScannerCountAggregateOutputType | null
    _min: EventScannerMinAggregateOutputType | null
    _max: EventScannerMaxAggregateOutputType | null
  }

  type GetEventScannerGroupByPayload<T extends EventScannerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventScannerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventScannerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventScannerGroupByOutputType[P]>
            : GetScalarType<T[P], EventScannerGroupByOutputType[P]>
        }
      >
    >


  export type EventScannerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event_id?: boolean
    user_id?: boolean
    assigner_id?: boolean
    created_at?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    scanner?: boolean | UserDefaultArgs<ExtArgs>
    assigned_by?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventScanner"]>

  export type EventScannerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event_id?: boolean
    user_id?: boolean
    assigner_id?: boolean
    created_at?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    scanner?: boolean | UserDefaultArgs<ExtArgs>
    assigned_by?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventScanner"]>

  export type EventScannerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event_id?: boolean
    user_id?: boolean
    assigner_id?: boolean
    created_at?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    scanner?: boolean | UserDefaultArgs<ExtArgs>
    assigned_by?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventScanner"]>

  export type EventScannerSelectScalar = {
    id?: boolean
    event_id?: boolean
    user_id?: boolean
    assigner_id?: boolean
    created_at?: boolean
  }

  export type EventScannerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "event_id" | "user_id" | "assigner_id" | "created_at", ExtArgs["result"]["eventScanner"]>
  export type EventScannerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    scanner?: boolean | UserDefaultArgs<ExtArgs>
    assigned_by?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EventScannerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    scanner?: boolean | UserDefaultArgs<ExtArgs>
    assigned_by?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EventScannerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    scanner?: boolean | UserDefaultArgs<ExtArgs>
    assigned_by?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EventScannerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EventScanner"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
      scanner: Prisma.$UserPayload<ExtArgs>
      assigned_by: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      event_id: string
      user_id: string
      assigner_id: string
      created_at: Date
    }, ExtArgs["result"]["eventScanner"]>
    composites: {}
  }

  type EventScannerGetPayload<S extends boolean | null | undefined | EventScannerDefaultArgs> = $Result.GetResult<Prisma.$EventScannerPayload, S>

  type EventScannerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventScannerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventScannerCountAggregateInputType | true
    }

  export interface EventScannerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EventScanner'], meta: { name: 'EventScanner' } }
    /**
     * Find zero or one EventScanner that matches the filter.
     * @param {EventScannerFindUniqueArgs} args - Arguments to find a EventScanner
     * @example
     * // Get one EventScanner
     * const eventScanner = await prisma.eventScanner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventScannerFindUniqueArgs>(args: SelectSubset<T, EventScannerFindUniqueArgs<ExtArgs>>): Prisma__EventScannerClient<$Result.GetResult<Prisma.$EventScannerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EventScanner that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventScannerFindUniqueOrThrowArgs} args - Arguments to find a EventScanner
     * @example
     * // Get one EventScanner
     * const eventScanner = await prisma.eventScanner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventScannerFindUniqueOrThrowArgs>(args: SelectSubset<T, EventScannerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventScannerClient<$Result.GetResult<Prisma.$EventScannerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventScanner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventScannerFindFirstArgs} args - Arguments to find a EventScanner
     * @example
     * // Get one EventScanner
     * const eventScanner = await prisma.eventScanner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventScannerFindFirstArgs>(args?: SelectSubset<T, EventScannerFindFirstArgs<ExtArgs>>): Prisma__EventScannerClient<$Result.GetResult<Prisma.$EventScannerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventScanner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventScannerFindFirstOrThrowArgs} args - Arguments to find a EventScanner
     * @example
     * // Get one EventScanner
     * const eventScanner = await prisma.eventScanner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventScannerFindFirstOrThrowArgs>(args?: SelectSubset<T, EventScannerFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventScannerClient<$Result.GetResult<Prisma.$EventScannerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EventScanners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventScannerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventScanners
     * const eventScanners = await prisma.eventScanner.findMany()
     * 
     * // Get first 10 EventScanners
     * const eventScanners = await prisma.eventScanner.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventScannerWithIdOnly = await prisma.eventScanner.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventScannerFindManyArgs>(args?: SelectSubset<T, EventScannerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventScannerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EventScanner.
     * @param {EventScannerCreateArgs} args - Arguments to create a EventScanner.
     * @example
     * // Create one EventScanner
     * const EventScanner = await prisma.eventScanner.create({
     *   data: {
     *     // ... data to create a EventScanner
     *   }
     * })
     * 
     */
    create<T extends EventScannerCreateArgs>(args: SelectSubset<T, EventScannerCreateArgs<ExtArgs>>): Prisma__EventScannerClient<$Result.GetResult<Prisma.$EventScannerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EventScanners.
     * @param {EventScannerCreateManyArgs} args - Arguments to create many EventScanners.
     * @example
     * // Create many EventScanners
     * const eventScanner = await prisma.eventScanner.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventScannerCreateManyArgs>(args?: SelectSubset<T, EventScannerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EventScanners and returns the data saved in the database.
     * @param {EventScannerCreateManyAndReturnArgs} args - Arguments to create many EventScanners.
     * @example
     * // Create many EventScanners
     * const eventScanner = await prisma.eventScanner.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EventScanners and only return the `id`
     * const eventScannerWithIdOnly = await prisma.eventScanner.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventScannerCreateManyAndReturnArgs>(args?: SelectSubset<T, EventScannerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventScannerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EventScanner.
     * @param {EventScannerDeleteArgs} args - Arguments to delete one EventScanner.
     * @example
     * // Delete one EventScanner
     * const EventScanner = await prisma.eventScanner.delete({
     *   where: {
     *     // ... filter to delete one EventScanner
     *   }
     * })
     * 
     */
    delete<T extends EventScannerDeleteArgs>(args: SelectSubset<T, EventScannerDeleteArgs<ExtArgs>>): Prisma__EventScannerClient<$Result.GetResult<Prisma.$EventScannerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EventScanner.
     * @param {EventScannerUpdateArgs} args - Arguments to update one EventScanner.
     * @example
     * // Update one EventScanner
     * const eventScanner = await prisma.eventScanner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventScannerUpdateArgs>(args: SelectSubset<T, EventScannerUpdateArgs<ExtArgs>>): Prisma__EventScannerClient<$Result.GetResult<Prisma.$EventScannerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EventScanners.
     * @param {EventScannerDeleteManyArgs} args - Arguments to filter EventScanners to delete.
     * @example
     * // Delete a few EventScanners
     * const { count } = await prisma.eventScanner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventScannerDeleteManyArgs>(args?: SelectSubset<T, EventScannerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventScanners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventScannerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventScanners
     * const eventScanner = await prisma.eventScanner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventScannerUpdateManyArgs>(args: SelectSubset<T, EventScannerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventScanners and returns the data updated in the database.
     * @param {EventScannerUpdateManyAndReturnArgs} args - Arguments to update many EventScanners.
     * @example
     * // Update many EventScanners
     * const eventScanner = await prisma.eventScanner.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EventScanners and only return the `id`
     * const eventScannerWithIdOnly = await prisma.eventScanner.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EventScannerUpdateManyAndReturnArgs>(args: SelectSubset<T, EventScannerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventScannerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EventScanner.
     * @param {EventScannerUpsertArgs} args - Arguments to update or create a EventScanner.
     * @example
     * // Update or create a EventScanner
     * const eventScanner = await prisma.eventScanner.upsert({
     *   create: {
     *     // ... data to create a EventScanner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventScanner we want to update
     *   }
     * })
     */
    upsert<T extends EventScannerUpsertArgs>(args: SelectSubset<T, EventScannerUpsertArgs<ExtArgs>>): Prisma__EventScannerClient<$Result.GetResult<Prisma.$EventScannerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EventScanners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventScannerCountArgs} args - Arguments to filter EventScanners to count.
     * @example
     * // Count the number of EventScanners
     * const count = await prisma.eventScanner.count({
     *   where: {
     *     // ... the filter for the EventScanners we want to count
     *   }
     * })
    **/
    count<T extends EventScannerCountArgs>(
      args?: Subset<T, EventScannerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventScannerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventScanner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventScannerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventScannerAggregateArgs>(args: Subset<T, EventScannerAggregateArgs>): Prisma.PrismaPromise<GetEventScannerAggregateType<T>>

    /**
     * Group by EventScanner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventScannerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventScannerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventScannerGroupByArgs['orderBy'] }
        : { orderBy?: EventScannerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventScannerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventScannerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EventScanner model
   */
  readonly fields: EventScannerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventScanner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventScannerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    scanner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    assigned_by<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EventScanner model
   */
  interface EventScannerFieldRefs {
    readonly id: FieldRef<"EventScanner", 'String'>
    readonly event_id: FieldRef<"EventScanner", 'String'>
    readonly user_id: FieldRef<"EventScanner", 'String'>
    readonly assigner_id: FieldRef<"EventScanner", 'String'>
    readonly created_at: FieldRef<"EventScanner", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EventScanner findUnique
   */
  export type EventScannerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventScanner
     */
    select?: EventScannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventScanner
     */
    omit?: EventScannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventScannerInclude<ExtArgs> | null
    /**
     * Filter, which EventScanner to fetch.
     */
    where: EventScannerWhereUniqueInput
  }

  /**
   * EventScanner findUniqueOrThrow
   */
  export type EventScannerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventScanner
     */
    select?: EventScannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventScanner
     */
    omit?: EventScannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventScannerInclude<ExtArgs> | null
    /**
     * Filter, which EventScanner to fetch.
     */
    where: EventScannerWhereUniqueInput
  }

  /**
   * EventScanner findFirst
   */
  export type EventScannerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventScanner
     */
    select?: EventScannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventScanner
     */
    omit?: EventScannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventScannerInclude<ExtArgs> | null
    /**
     * Filter, which EventScanner to fetch.
     */
    where?: EventScannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventScanners to fetch.
     */
    orderBy?: EventScannerOrderByWithRelationInput | EventScannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventScanners.
     */
    cursor?: EventScannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventScanners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventScanners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventScanners.
     */
    distinct?: EventScannerScalarFieldEnum | EventScannerScalarFieldEnum[]
  }

  /**
   * EventScanner findFirstOrThrow
   */
  export type EventScannerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventScanner
     */
    select?: EventScannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventScanner
     */
    omit?: EventScannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventScannerInclude<ExtArgs> | null
    /**
     * Filter, which EventScanner to fetch.
     */
    where?: EventScannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventScanners to fetch.
     */
    orderBy?: EventScannerOrderByWithRelationInput | EventScannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventScanners.
     */
    cursor?: EventScannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventScanners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventScanners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventScanners.
     */
    distinct?: EventScannerScalarFieldEnum | EventScannerScalarFieldEnum[]
  }

  /**
   * EventScanner findMany
   */
  export type EventScannerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventScanner
     */
    select?: EventScannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventScanner
     */
    omit?: EventScannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventScannerInclude<ExtArgs> | null
    /**
     * Filter, which EventScanners to fetch.
     */
    where?: EventScannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventScanners to fetch.
     */
    orderBy?: EventScannerOrderByWithRelationInput | EventScannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventScanners.
     */
    cursor?: EventScannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventScanners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventScanners.
     */
    skip?: number
    distinct?: EventScannerScalarFieldEnum | EventScannerScalarFieldEnum[]
  }

  /**
   * EventScanner create
   */
  export type EventScannerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventScanner
     */
    select?: EventScannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventScanner
     */
    omit?: EventScannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventScannerInclude<ExtArgs> | null
    /**
     * The data needed to create a EventScanner.
     */
    data: XOR<EventScannerCreateInput, EventScannerUncheckedCreateInput>
  }

  /**
   * EventScanner createMany
   */
  export type EventScannerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventScanners.
     */
    data: EventScannerCreateManyInput | EventScannerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventScanner createManyAndReturn
   */
  export type EventScannerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventScanner
     */
    select?: EventScannerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventScanner
     */
    omit?: EventScannerOmit<ExtArgs> | null
    /**
     * The data used to create many EventScanners.
     */
    data: EventScannerCreateManyInput | EventScannerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventScannerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventScanner update
   */
  export type EventScannerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventScanner
     */
    select?: EventScannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventScanner
     */
    omit?: EventScannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventScannerInclude<ExtArgs> | null
    /**
     * The data needed to update a EventScanner.
     */
    data: XOR<EventScannerUpdateInput, EventScannerUncheckedUpdateInput>
    /**
     * Choose, which EventScanner to update.
     */
    where: EventScannerWhereUniqueInput
  }

  /**
   * EventScanner updateMany
   */
  export type EventScannerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EventScanners.
     */
    data: XOR<EventScannerUpdateManyMutationInput, EventScannerUncheckedUpdateManyInput>
    /**
     * Filter which EventScanners to update
     */
    where?: EventScannerWhereInput
    /**
     * Limit how many EventScanners to update.
     */
    limit?: number
  }

  /**
   * EventScanner updateManyAndReturn
   */
  export type EventScannerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventScanner
     */
    select?: EventScannerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventScanner
     */
    omit?: EventScannerOmit<ExtArgs> | null
    /**
     * The data used to update EventScanners.
     */
    data: XOR<EventScannerUpdateManyMutationInput, EventScannerUncheckedUpdateManyInput>
    /**
     * Filter which EventScanners to update
     */
    where?: EventScannerWhereInput
    /**
     * Limit how many EventScanners to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventScannerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventScanner upsert
   */
  export type EventScannerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventScanner
     */
    select?: EventScannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventScanner
     */
    omit?: EventScannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventScannerInclude<ExtArgs> | null
    /**
     * The filter to search for the EventScanner to update in case it exists.
     */
    where: EventScannerWhereUniqueInput
    /**
     * In case the EventScanner found by the `where` argument doesn't exist, create a new EventScanner with this data.
     */
    create: XOR<EventScannerCreateInput, EventScannerUncheckedCreateInput>
    /**
     * In case the EventScanner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventScannerUpdateInput, EventScannerUncheckedUpdateInput>
  }

  /**
   * EventScanner delete
   */
  export type EventScannerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventScanner
     */
    select?: EventScannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventScanner
     */
    omit?: EventScannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventScannerInclude<ExtArgs> | null
    /**
     * Filter which EventScanner to delete.
     */
    where: EventScannerWhereUniqueInput
  }

  /**
   * EventScanner deleteMany
   */
  export type EventScannerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventScanners to delete
     */
    where?: EventScannerWhereInput
    /**
     * Limit how many EventScanners to delete.
     */
    limit?: number
  }

  /**
   * EventScanner without action
   */
  export type EventScannerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventScanner
     */
    select?: EventScannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventScanner
     */
    omit?: EventScannerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventScannerInclude<ExtArgs> | null
  }


  /**
   * Model EventMedia
   */

  export type AggregateEventMedia = {
    _count: EventMediaCountAggregateOutputType | null
    _min: EventMediaMinAggregateOutputType | null
    _max: EventMediaMaxAggregateOutputType | null
  }

  export type EventMediaMinAggregateOutputType = {
    id: string | null
    event_id: string | null
    user_id: string | null
    media_url: string | null
    caption: string | null
    uploaded_at: Date | null
  }

  export type EventMediaMaxAggregateOutputType = {
    id: string | null
    event_id: string | null
    user_id: string | null
    media_url: string | null
    caption: string | null
    uploaded_at: Date | null
  }

  export type EventMediaCountAggregateOutputType = {
    id: number
    event_id: number
    user_id: number
    media_url: number
    caption: number
    uploaded_at: number
    _all: number
  }


  export type EventMediaMinAggregateInputType = {
    id?: true
    event_id?: true
    user_id?: true
    media_url?: true
    caption?: true
    uploaded_at?: true
  }

  export type EventMediaMaxAggregateInputType = {
    id?: true
    event_id?: true
    user_id?: true
    media_url?: true
    caption?: true
    uploaded_at?: true
  }

  export type EventMediaCountAggregateInputType = {
    id?: true
    event_id?: true
    user_id?: true
    media_url?: true
    caption?: true
    uploaded_at?: true
    _all?: true
  }

  export type EventMediaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventMedia to aggregate.
     */
    where?: EventMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventMedias to fetch.
     */
    orderBy?: EventMediaOrderByWithRelationInput | EventMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EventMedias
    **/
    _count?: true | EventMediaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMediaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMediaMaxAggregateInputType
  }

  export type GetEventMediaAggregateType<T extends EventMediaAggregateArgs> = {
        [P in keyof T & keyof AggregateEventMedia]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEventMedia[P]>
      : GetScalarType<T[P], AggregateEventMedia[P]>
  }




  export type EventMediaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventMediaWhereInput
    orderBy?: EventMediaOrderByWithAggregationInput | EventMediaOrderByWithAggregationInput[]
    by: EventMediaScalarFieldEnum[] | EventMediaScalarFieldEnum
    having?: EventMediaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventMediaCountAggregateInputType | true
    _min?: EventMediaMinAggregateInputType
    _max?: EventMediaMaxAggregateInputType
  }

  export type EventMediaGroupByOutputType = {
    id: string
    event_id: string
    user_id: string
    media_url: string
    caption: string | null
    uploaded_at: Date
    _count: EventMediaCountAggregateOutputType | null
    _min: EventMediaMinAggregateOutputType | null
    _max: EventMediaMaxAggregateOutputType | null
  }

  type GetEventMediaGroupByPayload<T extends EventMediaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventMediaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventMediaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventMediaGroupByOutputType[P]>
            : GetScalarType<T[P], EventMediaGroupByOutputType[P]>
        }
      >
    >


  export type EventMediaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event_id?: boolean
    user_id?: boolean
    media_url?: boolean
    caption?: boolean
    uploaded_at?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    uploaded_by?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventMedia"]>

  export type EventMediaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event_id?: boolean
    user_id?: boolean
    media_url?: boolean
    caption?: boolean
    uploaded_at?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    uploaded_by?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventMedia"]>

  export type EventMediaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event_id?: boolean
    user_id?: boolean
    media_url?: boolean
    caption?: boolean
    uploaded_at?: boolean
    event?: boolean | EventDefaultArgs<ExtArgs>
    uploaded_by?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["eventMedia"]>

  export type EventMediaSelectScalar = {
    id?: boolean
    event_id?: boolean
    user_id?: boolean
    media_url?: boolean
    caption?: boolean
    uploaded_at?: boolean
  }

  export type EventMediaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "event_id" | "user_id" | "media_url" | "caption" | "uploaded_at", ExtArgs["result"]["eventMedia"]>
  export type EventMediaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    uploaded_by?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EventMediaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    uploaded_by?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type EventMediaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event?: boolean | EventDefaultArgs<ExtArgs>
    uploaded_by?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $EventMediaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EventMedia"
    objects: {
      event: Prisma.$EventPayload<ExtArgs>
      uploaded_by: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      event_id: string
      user_id: string
      media_url: string
      caption: string | null
      uploaded_at: Date
    }, ExtArgs["result"]["eventMedia"]>
    composites: {}
  }

  type EventMediaGetPayload<S extends boolean | null | undefined | EventMediaDefaultArgs> = $Result.GetResult<Prisma.$EventMediaPayload, S>

  type EventMediaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EventMediaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EventMediaCountAggregateInputType | true
    }

  export interface EventMediaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EventMedia'], meta: { name: 'EventMedia' } }
    /**
     * Find zero or one EventMedia that matches the filter.
     * @param {EventMediaFindUniqueArgs} args - Arguments to find a EventMedia
     * @example
     * // Get one EventMedia
     * const eventMedia = await prisma.eventMedia.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventMediaFindUniqueArgs>(args: SelectSubset<T, EventMediaFindUniqueArgs<ExtArgs>>): Prisma__EventMediaClient<$Result.GetResult<Prisma.$EventMediaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EventMedia that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EventMediaFindUniqueOrThrowArgs} args - Arguments to find a EventMedia
     * @example
     * // Get one EventMedia
     * const eventMedia = await prisma.eventMedia.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventMediaFindUniqueOrThrowArgs>(args: SelectSubset<T, EventMediaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventMediaClient<$Result.GetResult<Prisma.$EventMediaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventMedia that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventMediaFindFirstArgs} args - Arguments to find a EventMedia
     * @example
     * // Get one EventMedia
     * const eventMedia = await prisma.eventMedia.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventMediaFindFirstArgs>(args?: SelectSubset<T, EventMediaFindFirstArgs<ExtArgs>>): Prisma__EventMediaClient<$Result.GetResult<Prisma.$EventMediaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EventMedia that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventMediaFindFirstOrThrowArgs} args - Arguments to find a EventMedia
     * @example
     * // Get one EventMedia
     * const eventMedia = await prisma.eventMedia.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventMediaFindFirstOrThrowArgs>(args?: SelectSubset<T, EventMediaFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventMediaClient<$Result.GetResult<Prisma.$EventMediaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EventMedias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventMediaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EventMedias
     * const eventMedias = await prisma.eventMedia.findMany()
     * 
     * // Get first 10 EventMedias
     * const eventMedias = await prisma.eventMedia.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventMediaWithIdOnly = await prisma.eventMedia.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventMediaFindManyArgs>(args?: SelectSubset<T, EventMediaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventMediaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EventMedia.
     * @param {EventMediaCreateArgs} args - Arguments to create a EventMedia.
     * @example
     * // Create one EventMedia
     * const EventMedia = await prisma.eventMedia.create({
     *   data: {
     *     // ... data to create a EventMedia
     *   }
     * })
     * 
     */
    create<T extends EventMediaCreateArgs>(args: SelectSubset<T, EventMediaCreateArgs<ExtArgs>>): Prisma__EventMediaClient<$Result.GetResult<Prisma.$EventMediaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EventMedias.
     * @param {EventMediaCreateManyArgs} args - Arguments to create many EventMedias.
     * @example
     * // Create many EventMedias
     * const eventMedia = await prisma.eventMedia.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventMediaCreateManyArgs>(args?: SelectSubset<T, EventMediaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EventMedias and returns the data saved in the database.
     * @param {EventMediaCreateManyAndReturnArgs} args - Arguments to create many EventMedias.
     * @example
     * // Create many EventMedias
     * const eventMedia = await prisma.eventMedia.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EventMedias and only return the `id`
     * const eventMediaWithIdOnly = await prisma.eventMedia.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventMediaCreateManyAndReturnArgs>(args?: SelectSubset<T, EventMediaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventMediaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EventMedia.
     * @param {EventMediaDeleteArgs} args - Arguments to delete one EventMedia.
     * @example
     * // Delete one EventMedia
     * const EventMedia = await prisma.eventMedia.delete({
     *   where: {
     *     // ... filter to delete one EventMedia
     *   }
     * })
     * 
     */
    delete<T extends EventMediaDeleteArgs>(args: SelectSubset<T, EventMediaDeleteArgs<ExtArgs>>): Prisma__EventMediaClient<$Result.GetResult<Prisma.$EventMediaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EventMedia.
     * @param {EventMediaUpdateArgs} args - Arguments to update one EventMedia.
     * @example
     * // Update one EventMedia
     * const eventMedia = await prisma.eventMedia.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventMediaUpdateArgs>(args: SelectSubset<T, EventMediaUpdateArgs<ExtArgs>>): Prisma__EventMediaClient<$Result.GetResult<Prisma.$EventMediaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EventMedias.
     * @param {EventMediaDeleteManyArgs} args - Arguments to filter EventMedias to delete.
     * @example
     * // Delete a few EventMedias
     * const { count } = await prisma.eventMedia.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventMediaDeleteManyArgs>(args?: SelectSubset<T, EventMediaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventMedias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventMediaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EventMedias
     * const eventMedia = await prisma.eventMedia.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventMediaUpdateManyArgs>(args: SelectSubset<T, EventMediaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EventMedias and returns the data updated in the database.
     * @param {EventMediaUpdateManyAndReturnArgs} args - Arguments to update many EventMedias.
     * @example
     * // Update many EventMedias
     * const eventMedia = await prisma.eventMedia.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EventMedias and only return the `id`
     * const eventMediaWithIdOnly = await prisma.eventMedia.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EventMediaUpdateManyAndReturnArgs>(args: SelectSubset<T, EventMediaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventMediaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EventMedia.
     * @param {EventMediaUpsertArgs} args - Arguments to update or create a EventMedia.
     * @example
     * // Update or create a EventMedia
     * const eventMedia = await prisma.eventMedia.upsert({
     *   create: {
     *     // ... data to create a EventMedia
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EventMedia we want to update
     *   }
     * })
     */
    upsert<T extends EventMediaUpsertArgs>(args: SelectSubset<T, EventMediaUpsertArgs<ExtArgs>>): Prisma__EventMediaClient<$Result.GetResult<Prisma.$EventMediaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EventMedias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventMediaCountArgs} args - Arguments to filter EventMedias to count.
     * @example
     * // Count the number of EventMedias
     * const count = await prisma.eventMedia.count({
     *   where: {
     *     // ... the filter for the EventMedias we want to count
     *   }
     * })
    **/
    count<T extends EventMediaCountArgs>(
      args?: Subset<T, EventMediaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventMediaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EventMedia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventMediaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventMediaAggregateArgs>(args: Subset<T, EventMediaAggregateArgs>): Prisma.PrismaPromise<GetEventMediaAggregateType<T>>

    /**
     * Group by EventMedia.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventMediaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventMediaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventMediaGroupByArgs['orderBy'] }
        : { orderBy?: EventMediaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventMediaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventMediaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EventMedia model
   */
  readonly fields: EventMediaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EventMedia.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventMediaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    uploaded_by<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EventMedia model
   */
  interface EventMediaFieldRefs {
    readonly id: FieldRef<"EventMedia", 'String'>
    readonly event_id: FieldRef<"EventMedia", 'String'>
    readonly user_id: FieldRef<"EventMedia", 'String'>
    readonly media_url: FieldRef<"EventMedia", 'String'>
    readonly caption: FieldRef<"EventMedia", 'String'>
    readonly uploaded_at: FieldRef<"EventMedia", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * EventMedia findUnique
   */
  export type EventMediaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventMedia
     */
    select?: EventMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventMedia
     */
    omit?: EventMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventMediaInclude<ExtArgs> | null
    /**
     * Filter, which EventMedia to fetch.
     */
    where: EventMediaWhereUniqueInput
  }

  /**
   * EventMedia findUniqueOrThrow
   */
  export type EventMediaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventMedia
     */
    select?: EventMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventMedia
     */
    omit?: EventMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventMediaInclude<ExtArgs> | null
    /**
     * Filter, which EventMedia to fetch.
     */
    where: EventMediaWhereUniqueInput
  }

  /**
   * EventMedia findFirst
   */
  export type EventMediaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventMedia
     */
    select?: EventMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventMedia
     */
    omit?: EventMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventMediaInclude<ExtArgs> | null
    /**
     * Filter, which EventMedia to fetch.
     */
    where?: EventMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventMedias to fetch.
     */
    orderBy?: EventMediaOrderByWithRelationInput | EventMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventMedias.
     */
    cursor?: EventMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventMedias.
     */
    distinct?: EventMediaScalarFieldEnum | EventMediaScalarFieldEnum[]
  }

  /**
   * EventMedia findFirstOrThrow
   */
  export type EventMediaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventMedia
     */
    select?: EventMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventMedia
     */
    omit?: EventMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventMediaInclude<ExtArgs> | null
    /**
     * Filter, which EventMedia to fetch.
     */
    where?: EventMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventMedias to fetch.
     */
    orderBy?: EventMediaOrderByWithRelationInput | EventMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EventMedias.
     */
    cursor?: EventMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventMedias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EventMedias.
     */
    distinct?: EventMediaScalarFieldEnum | EventMediaScalarFieldEnum[]
  }

  /**
   * EventMedia findMany
   */
  export type EventMediaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventMedia
     */
    select?: EventMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventMedia
     */
    omit?: EventMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventMediaInclude<ExtArgs> | null
    /**
     * Filter, which EventMedias to fetch.
     */
    where?: EventMediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EventMedias to fetch.
     */
    orderBy?: EventMediaOrderByWithRelationInput | EventMediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EventMedias.
     */
    cursor?: EventMediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EventMedias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EventMedias.
     */
    skip?: number
    distinct?: EventMediaScalarFieldEnum | EventMediaScalarFieldEnum[]
  }

  /**
   * EventMedia create
   */
  export type EventMediaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventMedia
     */
    select?: EventMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventMedia
     */
    omit?: EventMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventMediaInclude<ExtArgs> | null
    /**
     * The data needed to create a EventMedia.
     */
    data: XOR<EventMediaCreateInput, EventMediaUncheckedCreateInput>
  }

  /**
   * EventMedia createMany
   */
  export type EventMediaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EventMedias.
     */
    data: EventMediaCreateManyInput | EventMediaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * EventMedia createManyAndReturn
   */
  export type EventMediaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventMedia
     */
    select?: EventMediaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventMedia
     */
    omit?: EventMediaOmit<ExtArgs> | null
    /**
     * The data used to create many EventMedias.
     */
    data: EventMediaCreateManyInput | EventMediaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventMediaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventMedia update
   */
  export type EventMediaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventMedia
     */
    select?: EventMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventMedia
     */
    omit?: EventMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventMediaInclude<ExtArgs> | null
    /**
     * The data needed to update a EventMedia.
     */
    data: XOR<EventMediaUpdateInput, EventMediaUncheckedUpdateInput>
    /**
     * Choose, which EventMedia to update.
     */
    where: EventMediaWhereUniqueInput
  }

  /**
   * EventMedia updateMany
   */
  export type EventMediaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EventMedias.
     */
    data: XOR<EventMediaUpdateManyMutationInput, EventMediaUncheckedUpdateManyInput>
    /**
     * Filter which EventMedias to update
     */
    where?: EventMediaWhereInput
    /**
     * Limit how many EventMedias to update.
     */
    limit?: number
  }

  /**
   * EventMedia updateManyAndReturn
   */
  export type EventMediaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventMedia
     */
    select?: EventMediaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EventMedia
     */
    omit?: EventMediaOmit<ExtArgs> | null
    /**
     * The data used to update EventMedias.
     */
    data: XOR<EventMediaUpdateManyMutationInput, EventMediaUncheckedUpdateManyInput>
    /**
     * Filter which EventMedias to update
     */
    where?: EventMediaWhereInput
    /**
     * Limit how many EventMedias to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventMediaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EventMedia upsert
   */
  export type EventMediaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventMedia
     */
    select?: EventMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventMedia
     */
    omit?: EventMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventMediaInclude<ExtArgs> | null
    /**
     * The filter to search for the EventMedia to update in case it exists.
     */
    where: EventMediaWhereUniqueInput
    /**
     * In case the EventMedia found by the `where` argument doesn't exist, create a new EventMedia with this data.
     */
    create: XOR<EventMediaCreateInput, EventMediaUncheckedCreateInput>
    /**
     * In case the EventMedia was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventMediaUpdateInput, EventMediaUncheckedUpdateInput>
  }

  /**
   * EventMedia delete
   */
  export type EventMediaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventMedia
     */
    select?: EventMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventMedia
     */
    omit?: EventMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventMediaInclude<ExtArgs> | null
    /**
     * Filter which EventMedia to delete.
     */
    where: EventMediaWhereUniqueInput
  }

  /**
   * EventMedia deleteMany
   */
  export type EventMediaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EventMedias to delete
     */
    where?: EventMediaWhereInput
    /**
     * Limit how many EventMedias to delete.
     */
    limit?: number
  }

  /**
   * EventMedia without action
   */
  export type EventMediaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventMedia
     */
    select?: EventMediaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EventMedia
     */
    omit?: EventMediaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventMediaInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    first_name: 'first_name',
    last_name: 'last_name',
    password: 'password',
    created_at: 'created_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const EventScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    start_time: 'start_time',
    end_time: 'end_time',
    location: 'location',
    created_at: 'created_at',
    creator_id: 'creator_id'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const EventAttendeeScalarFieldEnum: {
    id: 'id',
    event_id: 'event_id',
    user_id: 'user_id',
    registered_at: 'registered_at',
    ticket_qr: 'ticket_qr',
    status: 'status',
    ticket_used: 'ticket_used'
  };

  export type EventAttendeeScalarFieldEnum = (typeof EventAttendeeScalarFieldEnum)[keyof typeof EventAttendeeScalarFieldEnum]


  export const EventScannerScalarFieldEnum: {
    id: 'id',
    event_id: 'event_id',
    user_id: 'user_id',
    assigner_id: 'assigner_id',
    created_at: 'created_at'
  };

  export type EventScannerScalarFieldEnum = (typeof EventScannerScalarFieldEnum)[keyof typeof EventScannerScalarFieldEnum]


  export const EventMediaScalarFieldEnum: {
    id: 'id',
    event_id: 'event_id',
    user_id: 'user_id',
    media_url: 'media_url',
    caption: 'caption',
    uploaded_at: 'uploaded_at'
  };

  export type EventMediaScalarFieldEnum = (typeof EventMediaScalarFieldEnum)[keyof typeof EventMediaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    first_name?: StringFilter<"User"> | string
    last_name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    created_at?: DateTimeFilter<"User"> | Date | string
    Event?: EventListRelationFilter
    EventAttendee?: EventAttendeeListRelationFilter
    assigned_events?: EventScannerListRelationFilter
    scanned_events?: EventScannerListRelationFilter
    EventMedia?: EventMediaListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    Event?: EventOrderByRelationAggregateInput
    EventAttendee?: EventAttendeeOrderByRelationAggregateInput
    assigned_events?: EventScannerOrderByRelationAggregateInput
    scanned_events?: EventScannerOrderByRelationAggregateInput
    EventMedia?: EventMediaOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    first_name?: StringFilter<"User"> | string
    last_name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    created_at?: DateTimeFilter<"User"> | Date | string
    Event?: EventListRelationFilter
    EventAttendee?: EventAttendeeListRelationFilter
    assigned_events?: EventScannerListRelationFilter
    scanned_events?: EventScannerListRelationFilter
    EventMedia?: EventMediaListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    first_name?: StringWithAggregatesFilter<"User"> | string
    last_name?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: StringFilter<"Event"> | string
    name?: StringFilter<"Event"> | string
    description?: StringNullableFilter<"Event"> | string | null
    start_time?: DateTimeFilter<"Event"> | Date | string
    end_time?: DateTimeFilter<"Event"> | Date | string
    location?: StringNullableFilter<"Event"> | string | null
    created_at?: DateTimeFilter<"Event"> | Date | string
    creator_id?: StringFilter<"Event"> | string
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    EventAttendee?: EventAttendeeListRelationFilter
    EventScanner?: EventScannerListRelationFilter
    EventMedia?: EventMediaListRelationFilter
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    location?: SortOrderInput | SortOrder
    created_at?: SortOrder
    creator_id?: SortOrder
    creator?: UserOrderByWithRelationInput
    EventAttendee?: EventAttendeeOrderByRelationAggregateInput
    EventScanner?: EventScannerOrderByRelationAggregateInput
    EventMedia?: EventMediaOrderByRelationAggregateInput
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    name?: StringFilter<"Event"> | string
    description?: StringNullableFilter<"Event"> | string | null
    start_time?: DateTimeFilter<"Event"> | Date | string
    end_time?: DateTimeFilter<"Event"> | Date | string
    location?: StringNullableFilter<"Event"> | string | null
    created_at?: DateTimeFilter<"Event"> | Date | string
    creator_id?: StringFilter<"Event"> | string
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    EventAttendee?: EventAttendeeListRelationFilter
    EventScanner?: EventScannerListRelationFilter
    EventMedia?: EventMediaListRelationFilter
  }, "id">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    location?: SortOrderInput | SortOrder
    created_at?: SortOrder
    creator_id?: SortOrder
    _count?: EventCountOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Event"> | string
    name?: StringWithAggregatesFilter<"Event"> | string
    description?: StringNullableWithAggregatesFilter<"Event"> | string | null
    start_time?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    end_time?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    location?: StringNullableWithAggregatesFilter<"Event"> | string | null
    created_at?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    creator_id?: StringWithAggregatesFilter<"Event"> | string
  }

  export type EventAttendeeWhereInput = {
    AND?: EventAttendeeWhereInput | EventAttendeeWhereInput[]
    OR?: EventAttendeeWhereInput[]
    NOT?: EventAttendeeWhereInput | EventAttendeeWhereInput[]
    id?: StringFilter<"EventAttendee"> | string
    event_id?: StringFilter<"EventAttendee"> | string
    user_id?: StringFilter<"EventAttendee"> | string
    registered_at?: DateTimeFilter<"EventAttendee"> | Date | string
    ticket_qr?: StringNullableFilter<"EventAttendee"> | string | null
    status?: StringFilter<"EventAttendee"> | string
    ticket_used?: DateTimeNullableFilter<"EventAttendee"> | Date | string | null
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type EventAttendeeOrderByWithRelationInput = {
    id?: SortOrder
    event_id?: SortOrder
    user_id?: SortOrder
    registered_at?: SortOrder
    ticket_qr?: SortOrderInput | SortOrder
    status?: SortOrder
    ticket_used?: SortOrderInput | SortOrder
    event?: EventOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type EventAttendeeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    ticket_qr?: string
    AND?: EventAttendeeWhereInput | EventAttendeeWhereInput[]
    OR?: EventAttendeeWhereInput[]
    NOT?: EventAttendeeWhereInput | EventAttendeeWhereInput[]
    event_id?: StringFilter<"EventAttendee"> | string
    user_id?: StringFilter<"EventAttendee"> | string
    registered_at?: DateTimeFilter<"EventAttendee"> | Date | string
    status?: StringFilter<"EventAttendee"> | string
    ticket_used?: DateTimeNullableFilter<"EventAttendee"> | Date | string | null
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "ticket_qr">

  export type EventAttendeeOrderByWithAggregationInput = {
    id?: SortOrder
    event_id?: SortOrder
    user_id?: SortOrder
    registered_at?: SortOrder
    ticket_qr?: SortOrderInput | SortOrder
    status?: SortOrder
    ticket_used?: SortOrderInput | SortOrder
    _count?: EventAttendeeCountOrderByAggregateInput
    _max?: EventAttendeeMaxOrderByAggregateInput
    _min?: EventAttendeeMinOrderByAggregateInput
  }

  export type EventAttendeeScalarWhereWithAggregatesInput = {
    AND?: EventAttendeeScalarWhereWithAggregatesInput | EventAttendeeScalarWhereWithAggregatesInput[]
    OR?: EventAttendeeScalarWhereWithAggregatesInput[]
    NOT?: EventAttendeeScalarWhereWithAggregatesInput | EventAttendeeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EventAttendee"> | string
    event_id?: StringWithAggregatesFilter<"EventAttendee"> | string
    user_id?: StringWithAggregatesFilter<"EventAttendee"> | string
    registered_at?: DateTimeWithAggregatesFilter<"EventAttendee"> | Date | string
    ticket_qr?: StringNullableWithAggregatesFilter<"EventAttendee"> | string | null
    status?: StringWithAggregatesFilter<"EventAttendee"> | string
    ticket_used?: DateTimeNullableWithAggregatesFilter<"EventAttendee"> | Date | string | null
  }

  export type EventScannerWhereInput = {
    AND?: EventScannerWhereInput | EventScannerWhereInput[]
    OR?: EventScannerWhereInput[]
    NOT?: EventScannerWhereInput | EventScannerWhereInput[]
    id?: StringFilter<"EventScanner"> | string
    event_id?: StringFilter<"EventScanner"> | string
    user_id?: StringFilter<"EventScanner"> | string
    assigner_id?: StringFilter<"EventScanner"> | string
    created_at?: DateTimeFilter<"EventScanner"> | Date | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    scanner?: XOR<UserScalarRelationFilter, UserWhereInput>
    assigned_by?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type EventScannerOrderByWithRelationInput = {
    id?: SortOrder
    event_id?: SortOrder
    user_id?: SortOrder
    assigner_id?: SortOrder
    created_at?: SortOrder
    event?: EventOrderByWithRelationInput
    scanner?: UserOrderByWithRelationInput
    assigned_by?: UserOrderByWithRelationInput
  }

  export type EventScannerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventScannerWhereInput | EventScannerWhereInput[]
    OR?: EventScannerWhereInput[]
    NOT?: EventScannerWhereInput | EventScannerWhereInput[]
    event_id?: StringFilter<"EventScanner"> | string
    user_id?: StringFilter<"EventScanner"> | string
    assigner_id?: StringFilter<"EventScanner"> | string
    created_at?: DateTimeFilter<"EventScanner"> | Date | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    scanner?: XOR<UserScalarRelationFilter, UserWhereInput>
    assigned_by?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type EventScannerOrderByWithAggregationInput = {
    id?: SortOrder
    event_id?: SortOrder
    user_id?: SortOrder
    assigner_id?: SortOrder
    created_at?: SortOrder
    _count?: EventScannerCountOrderByAggregateInput
    _max?: EventScannerMaxOrderByAggregateInput
    _min?: EventScannerMinOrderByAggregateInput
  }

  export type EventScannerScalarWhereWithAggregatesInput = {
    AND?: EventScannerScalarWhereWithAggregatesInput | EventScannerScalarWhereWithAggregatesInput[]
    OR?: EventScannerScalarWhereWithAggregatesInput[]
    NOT?: EventScannerScalarWhereWithAggregatesInput | EventScannerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EventScanner"> | string
    event_id?: StringWithAggregatesFilter<"EventScanner"> | string
    user_id?: StringWithAggregatesFilter<"EventScanner"> | string
    assigner_id?: StringWithAggregatesFilter<"EventScanner"> | string
    created_at?: DateTimeWithAggregatesFilter<"EventScanner"> | Date | string
  }

  export type EventMediaWhereInput = {
    AND?: EventMediaWhereInput | EventMediaWhereInput[]
    OR?: EventMediaWhereInput[]
    NOT?: EventMediaWhereInput | EventMediaWhereInput[]
    id?: StringFilter<"EventMedia"> | string
    event_id?: StringFilter<"EventMedia"> | string
    user_id?: StringFilter<"EventMedia"> | string
    media_url?: StringFilter<"EventMedia"> | string
    caption?: StringNullableFilter<"EventMedia"> | string | null
    uploaded_at?: DateTimeFilter<"EventMedia"> | Date | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    uploaded_by?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type EventMediaOrderByWithRelationInput = {
    id?: SortOrder
    event_id?: SortOrder
    user_id?: SortOrder
    media_url?: SortOrder
    caption?: SortOrderInput | SortOrder
    uploaded_at?: SortOrder
    event?: EventOrderByWithRelationInput
    uploaded_by?: UserOrderByWithRelationInput
  }

  export type EventMediaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EventMediaWhereInput | EventMediaWhereInput[]
    OR?: EventMediaWhereInput[]
    NOT?: EventMediaWhereInput | EventMediaWhereInput[]
    event_id?: StringFilter<"EventMedia"> | string
    user_id?: StringFilter<"EventMedia"> | string
    media_url?: StringFilter<"EventMedia"> | string
    caption?: StringNullableFilter<"EventMedia"> | string | null
    uploaded_at?: DateTimeFilter<"EventMedia"> | Date | string
    event?: XOR<EventScalarRelationFilter, EventWhereInput>
    uploaded_by?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type EventMediaOrderByWithAggregationInput = {
    id?: SortOrder
    event_id?: SortOrder
    user_id?: SortOrder
    media_url?: SortOrder
    caption?: SortOrderInput | SortOrder
    uploaded_at?: SortOrder
    _count?: EventMediaCountOrderByAggregateInput
    _max?: EventMediaMaxOrderByAggregateInput
    _min?: EventMediaMinOrderByAggregateInput
  }

  export type EventMediaScalarWhereWithAggregatesInput = {
    AND?: EventMediaScalarWhereWithAggregatesInput | EventMediaScalarWhereWithAggregatesInput[]
    OR?: EventMediaScalarWhereWithAggregatesInput[]
    NOT?: EventMediaScalarWhereWithAggregatesInput | EventMediaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EventMedia"> | string
    event_id?: StringWithAggregatesFilter<"EventMedia"> | string
    user_id?: StringWithAggregatesFilter<"EventMedia"> | string
    media_url?: StringWithAggregatesFilter<"EventMedia"> | string
    caption?: StringNullableWithAggregatesFilter<"EventMedia"> | string | null
    uploaded_at?: DateTimeWithAggregatesFilter<"EventMedia"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    first_name: string
    last_name: string
    password: string
    created_at?: Date | string
    Event?: EventCreateNestedManyWithoutCreatorInput
    EventAttendee?: EventAttendeeCreateNestedManyWithoutUserInput
    assigned_events?: EventScannerCreateNestedManyWithoutAssigned_byInput
    scanned_events?: EventScannerCreateNestedManyWithoutScannerInput
    EventMedia?: EventMediaCreateNestedManyWithoutUploaded_byInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    first_name: string
    last_name: string
    password: string
    created_at?: Date | string
    Event?: EventUncheckedCreateNestedManyWithoutCreatorInput
    EventAttendee?: EventAttendeeUncheckedCreateNestedManyWithoutUserInput
    assigned_events?: EventScannerUncheckedCreateNestedManyWithoutAssigned_byInput
    scanned_events?: EventScannerUncheckedCreateNestedManyWithoutScannerInput
    EventMedia?: EventMediaUncheckedCreateNestedManyWithoutUploaded_byInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Event?: EventUpdateManyWithoutCreatorNestedInput
    EventAttendee?: EventAttendeeUpdateManyWithoutUserNestedInput
    assigned_events?: EventScannerUpdateManyWithoutAssigned_byNestedInput
    scanned_events?: EventScannerUpdateManyWithoutScannerNestedInput
    EventMedia?: EventMediaUpdateManyWithoutUploaded_byNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Event?: EventUncheckedUpdateManyWithoutCreatorNestedInput
    EventAttendee?: EventAttendeeUncheckedUpdateManyWithoutUserNestedInput
    assigned_events?: EventScannerUncheckedUpdateManyWithoutAssigned_byNestedInput
    scanned_events?: EventScannerUncheckedUpdateManyWithoutScannerNestedInput
    EventMedia?: EventMediaUncheckedUpdateManyWithoutUploaded_byNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    first_name: string
    last_name: string
    password: string
    created_at?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventCreateInput = {
    id?: string
    name: string
    description?: string | null
    start_time: Date | string
    end_time: Date | string
    location?: string | null
    created_at?: Date | string
    creator: UserCreateNestedOneWithoutEventInput
    EventAttendee?: EventAttendeeCreateNestedManyWithoutEventInput
    EventScanner?: EventScannerCreateNestedManyWithoutEventInput
    EventMedia?: EventMediaCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    start_time: Date | string
    end_time: Date | string
    location?: string | null
    created_at?: Date | string
    creator_id: string
    EventAttendee?: EventAttendeeUncheckedCreateNestedManyWithoutEventInput
    EventScanner?: EventScannerUncheckedCreateNestedManyWithoutEventInput
    EventMedia?: EventMediaUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutEventNestedInput
    EventAttendee?: EventAttendeeUpdateManyWithoutEventNestedInput
    EventScanner?: EventScannerUpdateManyWithoutEventNestedInput
    EventMedia?: EventMediaUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    creator_id?: StringFieldUpdateOperationsInput | string
    EventAttendee?: EventAttendeeUncheckedUpdateManyWithoutEventNestedInput
    EventScanner?: EventScannerUncheckedUpdateManyWithoutEventNestedInput
    EventMedia?: EventMediaUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    start_time: Date | string
    end_time: Date | string
    location?: string | null
    created_at?: Date | string
    creator_id: string
  }

  export type EventUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    creator_id?: StringFieldUpdateOperationsInput | string
  }

  export type EventAttendeeCreateInput = {
    id?: string
    registered_at?: Date | string
    ticket_qr?: string | null
    status?: string
    ticket_used?: Date | string | null
    event: EventCreateNestedOneWithoutEventAttendeeInput
    user: UserCreateNestedOneWithoutEventAttendeeInput
  }

  export type EventAttendeeUncheckedCreateInput = {
    id?: string
    event_id: string
    user_id: string
    registered_at?: Date | string
    ticket_qr?: string | null
    status?: string
    ticket_used?: Date | string | null
  }

  export type EventAttendeeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    registered_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket_qr?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    ticket_used?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    event?: EventUpdateOneRequiredWithoutEventAttendeeNestedInput
    user?: UserUpdateOneRequiredWithoutEventAttendeeNestedInput
  }

  export type EventAttendeeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    event_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    registered_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket_qr?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    ticket_used?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EventAttendeeCreateManyInput = {
    id?: string
    event_id: string
    user_id: string
    registered_at?: Date | string
    ticket_qr?: string | null
    status?: string
    ticket_used?: Date | string | null
  }

  export type EventAttendeeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    registered_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket_qr?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    ticket_used?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EventAttendeeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    event_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    registered_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket_qr?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    ticket_used?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EventScannerCreateInput = {
    id?: string
    created_at?: Date | string
    event: EventCreateNestedOneWithoutEventScannerInput
    scanner: UserCreateNestedOneWithoutScanned_eventsInput
    assigned_by: UserCreateNestedOneWithoutAssigned_eventsInput
  }

  export type EventScannerUncheckedCreateInput = {
    id?: string
    event_id: string
    user_id: string
    assigner_id: string
    created_at?: Date | string
  }

  export type EventScannerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutEventScannerNestedInput
    scanner?: UserUpdateOneRequiredWithoutScanned_eventsNestedInput
    assigned_by?: UserUpdateOneRequiredWithoutAssigned_eventsNestedInput
  }

  export type EventScannerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    event_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    assigner_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventScannerCreateManyInput = {
    id?: string
    event_id: string
    user_id: string
    assigner_id: string
    created_at?: Date | string
  }

  export type EventScannerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventScannerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    event_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    assigner_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventMediaCreateInput = {
    id?: string
    media_url: string
    caption?: string | null
    uploaded_at?: Date | string
    event: EventCreateNestedOneWithoutEventMediaInput
    uploaded_by: UserCreateNestedOneWithoutEventMediaInput
  }

  export type EventMediaUncheckedCreateInput = {
    id?: string
    event_id: string
    user_id: string
    media_url: string
    caption?: string | null
    uploaded_at?: Date | string
  }

  export type EventMediaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    media_url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutEventMediaNestedInput
    uploaded_by?: UserUpdateOneRequiredWithoutEventMediaNestedInput
  }

  export type EventMediaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    event_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    media_url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventMediaCreateManyInput = {
    id?: string
    event_id: string
    user_id: string
    media_url: string
    caption?: string | null
    uploaded_at?: Date | string
  }

  export type EventMediaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    media_url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventMediaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    event_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    media_url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type EventListRelationFilter = {
    every?: EventWhereInput
    some?: EventWhereInput
    none?: EventWhereInput
  }

  export type EventAttendeeListRelationFilter = {
    every?: EventAttendeeWhereInput
    some?: EventAttendeeWhereInput
    none?: EventAttendeeWhereInput
  }

  export type EventScannerListRelationFilter = {
    every?: EventScannerWhereInput
    some?: EventScannerWhereInput
    none?: EventScannerWhereInput
  }

  export type EventMediaListRelationFilter = {
    every?: EventMediaWhereInput
    some?: EventMediaWhereInput
    none?: EventMediaWhereInput
  }

  export type EventOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventAttendeeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventScannerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventMediaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    password?: SortOrder
    created_at?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    location?: SortOrder
    created_at?: SortOrder
    creator_id?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    location?: SortOrder
    created_at?: SortOrder
    creator_id?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    start_time?: SortOrder
    end_time?: SortOrder
    location?: SortOrder
    created_at?: SortOrder
    creator_id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EventScalarRelationFilter = {
    is?: EventWhereInput
    isNot?: EventWhereInput
  }

  export type EventAttendeeCountOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    user_id?: SortOrder
    registered_at?: SortOrder
    ticket_qr?: SortOrder
    status?: SortOrder
    ticket_used?: SortOrder
  }

  export type EventAttendeeMaxOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    user_id?: SortOrder
    registered_at?: SortOrder
    ticket_qr?: SortOrder
    status?: SortOrder
    ticket_used?: SortOrder
  }

  export type EventAttendeeMinOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    user_id?: SortOrder
    registered_at?: SortOrder
    ticket_qr?: SortOrder
    status?: SortOrder
    ticket_used?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EventScannerCountOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    user_id?: SortOrder
    assigner_id?: SortOrder
    created_at?: SortOrder
  }

  export type EventScannerMaxOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    user_id?: SortOrder
    assigner_id?: SortOrder
    created_at?: SortOrder
  }

  export type EventScannerMinOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    user_id?: SortOrder
    assigner_id?: SortOrder
    created_at?: SortOrder
  }

  export type EventMediaCountOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    user_id?: SortOrder
    media_url?: SortOrder
    caption?: SortOrder
    uploaded_at?: SortOrder
  }

  export type EventMediaMaxOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    user_id?: SortOrder
    media_url?: SortOrder
    caption?: SortOrder
    uploaded_at?: SortOrder
  }

  export type EventMediaMinOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    user_id?: SortOrder
    media_url?: SortOrder
    caption?: SortOrder
    uploaded_at?: SortOrder
  }

  export type EventCreateNestedManyWithoutCreatorInput = {
    create?: XOR<EventCreateWithoutCreatorInput, EventUncheckedCreateWithoutCreatorInput> | EventCreateWithoutCreatorInput[] | EventUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: EventCreateOrConnectWithoutCreatorInput | EventCreateOrConnectWithoutCreatorInput[]
    createMany?: EventCreateManyCreatorInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type EventAttendeeCreateNestedManyWithoutUserInput = {
    create?: XOR<EventAttendeeCreateWithoutUserInput, EventAttendeeUncheckedCreateWithoutUserInput> | EventAttendeeCreateWithoutUserInput[] | EventAttendeeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventAttendeeCreateOrConnectWithoutUserInput | EventAttendeeCreateOrConnectWithoutUserInput[]
    createMany?: EventAttendeeCreateManyUserInputEnvelope
    connect?: EventAttendeeWhereUniqueInput | EventAttendeeWhereUniqueInput[]
  }

  export type EventScannerCreateNestedManyWithoutAssigned_byInput = {
    create?: XOR<EventScannerCreateWithoutAssigned_byInput, EventScannerUncheckedCreateWithoutAssigned_byInput> | EventScannerCreateWithoutAssigned_byInput[] | EventScannerUncheckedCreateWithoutAssigned_byInput[]
    connectOrCreate?: EventScannerCreateOrConnectWithoutAssigned_byInput | EventScannerCreateOrConnectWithoutAssigned_byInput[]
    createMany?: EventScannerCreateManyAssigned_byInputEnvelope
    connect?: EventScannerWhereUniqueInput | EventScannerWhereUniqueInput[]
  }

  export type EventScannerCreateNestedManyWithoutScannerInput = {
    create?: XOR<EventScannerCreateWithoutScannerInput, EventScannerUncheckedCreateWithoutScannerInput> | EventScannerCreateWithoutScannerInput[] | EventScannerUncheckedCreateWithoutScannerInput[]
    connectOrCreate?: EventScannerCreateOrConnectWithoutScannerInput | EventScannerCreateOrConnectWithoutScannerInput[]
    createMany?: EventScannerCreateManyScannerInputEnvelope
    connect?: EventScannerWhereUniqueInput | EventScannerWhereUniqueInput[]
  }

  export type EventMediaCreateNestedManyWithoutUploaded_byInput = {
    create?: XOR<EventMediaCreateWithoutUploaded_byInput, EventMediaUncheckedCreateWithoutUploaded_byInput> | EventMediaCreateWithoutUploaded_byInput[] | EventMediaUncheckedCreateWithoutUploaded_byInput[]
    connectOrCreate?: EventMediaCreateOrConnectWithoutUploaded_byInput | EventMediaCreateOrConnectWithoutUploaded_byInput[]
    createMany?: EventMediaCreateManyUploaded_byInputEnvelope
    connect?: EventMediaWhereUniqueInput | EventMediaWhereUniqueInput[]
  }

  export type EventUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<EventCreateWithoutCreatorInput, EventUncheckedCreateWithoutCreatorInput> | EventCreateWithoutCreatorInput[] | EventUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: EventCreateOrConnectWithoutCreatorInput | EventCreateOrConnectWithoutCreatorInput[]
    createMany?: EventCreateManyCreatorInputEnvelope
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
  }

  export type EventAttendeeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<EventAttendeeCreateWithoutUserInput, EventAttendeeUncheckedCreateWithoutUserInput> | EventAttendeeCreateWithoutUserInput[] | EventAttendeeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventAttendeeCreateOrConnectWithoutUserInput | EventAttendeeCreateOrConnectWithoutUserInput[]
    createMany?: EventAttendeeCreateManyUserInputEnvelope
    connect?: EventAttendeeWhereUniqueInput | EventAttendeeWhereUniqueInput[]
  }

  export type EventScannerUncheckedCreateNestedManyWithoutAssigned_byInput = {
    create?: XOR<EventScannerCreateWithoutAssigned_byInput, EventScannerUncheckedCreateWithoutAssigned_byInput> | EventScannerCreateWithoutAssigned_byInput[] | EventScannerUncheckedCreateWithoutAssigned_byInput[]
    connectOrCreate?: EventScannerCreateOrConnectWithoutAssigned_byInput | EventScannerCreateOrConnectWithoutAssigned_byInput[]
    createMany?: EventScannerCreateManyAssigned_byInputEnvelope
    connect?: EventScannerWhereUniqueInput | EventScannerWhereUniqueInput[]
  }

  export type EventScannerUncheckedCreateNestedManyWithoutScannerInput = {
    create?: XOR<EventScannerCreateWithoutScannerInput, EventScannerUncheckedCreateWithoutScannerInput> | EventScannerCreateWithoutScannerInput[] | EventScannerUncheckedCreateWithoutScannerInput[]
    connectOrCreate?: EventScannerCreateOrConnectWithoutScannerInput | EventScannerCreateOrConnectWithoutScannerInput[]
    createMany?: EventScannerCreateManyScannerInputEnvelope
    connect?: EventScannerWhereUniqueInput | EventScannerWhereUniqueInput[]
  }

  export type EventMediaUncheckedCreateNestedManyWithoutUploaded_byInput = {
    create?: XOR<EventMediaCreateWithoutUploaded_byInput, EventMediaUncheckedCreateWithoutUploaded_byInput> | EventMediaCreateWithoutUploaded_byInput[] | EventMediaUncheckedCreateWithoutUploaded_byInput[]
    connectOrCreate?: EventMediaCreateOrConnectWithoutUploaded_byInput | EventMediaCreateOrConnectWithoutUploaded_byInput[]
    createMany?: EventMediaCreateManyUploaded_byInputEnvelope
    connect?: EventMediaWhereUniqueInput | EventMediaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EventUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<EventCreateWithoutCreatorInput, EventUncheckedCreateWithoutCreatorInput> | EventCreateWithoutCreatorInput[] | EventUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: EventCreateOrConnectWithoutCreatorInput | EventCreateOrConnectWithoutCreatorInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutCreatorInput | EventUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: EventCreateManyCreatorInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutCreatorInput | EventUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: EventUpdateManyWithWhereWithoutCreatorInput | EventUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type EventAttendeeUpdateManyWithoutUserNestedInput = {
    create?: XOR<EventAttendeeCreateWithoutUserInput, EventAttendeeUncheckedCreateWithoutUserInput> | EventAttendeeCreateWithoutUserInput[] | EventAttendeeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventAttendeeCreateOrConnectWithoutUserInput | EventAttendeeCreateOrConnectWithoutUserInput[]
    upsert?: EventAttendeeUpsertWithWhereUniqueWithoutUserInput | EventAttendeeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EventAttendeeCreateManyUserInputEnvelope
    set?: EventAttendeeWhereUniqueInput | EventAttendeeWhereUniqueInput[]
    disconnect?: EventAttendeeWhereUniqueInput | EventAttendeeWhereUniqueInput[]
    delete?: EventAttendeeWhereUniqueInput | EventAttendeeWhereUniqueInput[]
    connect?: EventAttendeeWhereUniqueInput | EventAttendeeWhereUniqueInput[]
    update?: EventAttendeeUpdateWithWhereUniqueWithoutUserInput | EventAttendeeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EventAttendeeUpdateManyWithWhereWithoutUserInput | EventAttendeeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EventAttendeeScalarWhereInput | EventAttendeeScalarWhereInput[]
  }

  export type EventScannerUpdateManyWithoutAssigned_byNestedInput = {
    create?: XOR<EventScannerCreateWithoutAssigned_byInput, EventScannerUncheckedCreateWithoutAssigned_byInput> | EventScannerCreateWithoutAssigned_byInput[] | EventScannerUncheckedCreateWithoutAssigned_byInput[]
    connectOrCreate?: EventScannerCreateOrConnectWithoutAssigned_byInput | EventScannerCreateOrConnectWithoutAssigned_byInput[]
    upsert?: EventScannerUpsertWithWhereUniqueWithoutAssigned_byInput | EventScannerUpsertWithWhereUniqueWithoutAssigned_byInput[]
    createMany?: EventScannerCreateManyAssigned_byInputEnvelope
    set?: EventScannerWhereUniqueInput | EventScannerWhereUniqueInput[]
    disconnect?: EventScannerWhereUniqueInput | EventScannerWhereUniqueInput[]
    delete?: EventScannerWhereUniqueInput | EventScannerWhereUniqueInput[]
    connect?: EventScannerWhereUniqueInput | EventScannerWhereUniqueInput[]
    update?: EventScannerUpdateWithWhereUniqueWithoutAssigned_byInput | EventScannerUpdateWithWhereUniqueWithoutAssigned_byInput[]
    updateMany?: EventScannerUpdateManyWithWhereWithoutAssigned_byInput | EventScannerUpdateManyWithWhereWithoutAssigned_byInput[]
    deleteMany?: EventScannerScalarWhereInput | EventScannerScalarWhereInput[]
  }

  export type EventScannerUpdateManyWithoutScannerNestedInput = {
    create?: XOR<EventScannerCreateWithoutScannerInput, EventScannerUncheckedCreateWithoutScannerInput> | EventScannerCreateWithoutScannerInput[] | EventScannerUncheckedCreateWithoutScannerInput[]
    connectOrCreate?: EventScannerCreateOrConnectWithoutScannerInput | EventScannerCreateOrConnectWithoutScannerInput[]
    upsert?: EventScannerUpsertWithWhereUniqueWithoutScannerInput | EventScannerUpsertWithWhereUniqueWithoutScannerInput[]
    createMany?: EventScannerCreateManyScannerInputEnvelope
    set?: EventScannerWhereUniqueInput | EventScannerWhereUniqueInput[]
    disconnect?: EventScannerWhereUniqueInput | EventScannerWhereUniqueInput[]
    delete?: EventScannerWhereUniqueInput | EventScannerWhereUniqueInput[]
    connect?: EventScannerWhereUniqueInput | EventScannerWhereUniqueInput[]
    update?: EventScannerUpdateWithWhereUniqueWithoutScannerInput | EventScannerUpdateWithWhereUniqueWithoutScannerInput[]
    updateMany?: EventScannerUpdateManyWithWhereWithoutScannerInput | EventScannerUpdateManyWithWhereWithoutScannerInput[]
    deleteMany?: EventScannerScalarWhereInput | EventScannerScalarWhereInput[]
  }

  export type EventMediaUpdateManyWithoutUploaded_byNestedInput = {
    create?: XOR<EventMediaCreateWithoutUploaded_byInput, EventMediaUncheckedCreateWithoutUploaded_byInput> | EventMediaCreateWithoutUploaded_byInput[] | EventMediaUncheckedCreateWithoutUploaded_byInput[]
    connectOrCreate?: EventMediaCreateOrConnectWithoutUploaded_byInput | EventMediaCreateOrConnectWithoutUploaded_byInput[]
    upsert?: EventMediaUpsertWithWhereUniqueWithoutUploaded_byInput | EventMediaUpsertWithWhereUniqueWithoutUploaded_byInput[]
    createMany?: EventMediaCreateManyUploaded_byInputEnvelope
    set?: EventMediaWhereUniqueInput | EventMediaWhereUniqueInput[]
    disconnect?: EventMediaWhereUniqueInput | EventMediaWhereUniqueInput[]
    delete?: EventMediaWhereUniqueInput | EventMediaWhereUniqueInput[]
    connect?: EventMediaWhereUniqueInput | EventMediaWhereUniqueInput[]
    update?: EventMediaUpdateWithWhereUniqueWithoutUploaded_byInput | EventMediaUpdateWithWhereUniqueWithoutUploaded_byInput[]
    updateMany?: EventMediaUpdateManyWithWhereWithoutUploaded_byInput | EventMediaUpdateManyWithWhereWithoutUploaded_byInput[]
    deleteMany?: EventMediaScalarWhereInput | EventMediaScalarWhereInput[]
  }

  export type EventUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<EventCreateWithoutCreatorInput, EventUncheckedCreateWithoutCreatorInput> | EventCreateWithoutCreatorInput[] | EventUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: EventCreateOrConnectWithoutCreatorInput | EventCreateOrConnectWithoutCreatorInput[]
    upsert?: EventUpsertWithWhereUniqueWithoutCreatorInput | EventUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: EventCreateManyCreatorInputEnvelope
    set?: EventWhereUniqueInput | EventWhereUniqueInput[]
    disconnect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    delete?: EventWhereUniqueInput | EventWhereUniqueInput[]
    connect?: EventWhereUniqueInput | EventWhereUniqueInput[]
    update?: EventUpdateWithWhereUniqueWithoutCreatorInput | EventUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: EventUpdateManyWithWhereWithoutCreatorInput | EventUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: EventScalarWhereInput | EventScalarWhereInput[]
  }

  export type EventAttendeeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<EventAttendeeCreateWithoutUserInput, EventAttendeeUncheckedCreateWithoutUserInput> | EventAttendeeCreateWithoutUserInput[] | EventAttendeeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: EventAttendeeCreateOrConnectWithoutUserInput | EventAttendeeCreateOrConnectWithoutUserInput[]
    upsert?: EventAttendeeUpsertWithWhereUniqueWithoutUserInput | EventAttendeeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: EventAttendeeCreateManyUserInputEnvelope
    set?: EventAttendeeWhereUniqueInput | EventAttendeeWhereUniqueInput[]
    disconnect?: EventAttendeeWhereUniqueInput | EventAttendeeWhereUniqueInput[]
    delete?: EventAttendeeWhereUniqueInput | EventAttendeeWhereUniqueInput[]
    connect?: EventAttendeeWhereUniqueInput | EventAttendeeWhereUniqueInput[]
    update?: EventAttendeeUpdateWithWhereUniqueWithoutUserInput | EventAttendeeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: EventAttendeeUpdateManyWithWhereWithoutUserInput | EventAttendeeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: EventAttendeeScalarWhereInput | EventAttendeeScalarWhereInput[]
  }

  export type EventScannerUncheckedUpdateManyWithoutAssigned_byNestedInput = {
    create?: XOR<EventScannerCreateWithoutAssigned_byInput, EventScannerUncheckedCreateWithoutAssigned_byInput> | EventScannerCreateWithoutAssigned_byInput[] | EventScannerUncheckedCreateWithoutAssigned_byInput[]
    connectOrCreate?: EventScannerCreateOrConnectWithoutAssigned_byInput | EventScannerCreateOrConnectWithoutAssigned_byInput[]
    upsert?: EventScannerUpsertWithWhereUniqueWithoutAssigned_byInput | EventScannerUpsertWithWhereUniqueWithoutAssigned_byInput[]
    createMany?: EventScannerCreateManyAssigned_byInputEnvelope
    set?: EventScannerWhereUniqueInput | EventScannerWhereUniqueInput[]
    disconnect?: EventScannerWhereUniqueInput | EventScannerWhereUniqueInput[]
    delete?: EventScannerWhereUniqueInput | EventScannerWhereUniqueInput[]
    connect?: EventScannerWhereUniqueInput | EventScannerWhereUniqueInput[]
    update?: EventScannerUpdateWithWhereUniqueWithoutAssigned_byInput | EventScannerUpdateWithWhereUniqueWithoutAssigned_byInput[]
    updateMany?: EventScannerUpdateManyWithWhereWithoutAssigned_byInput | EventScannerUpdateManyWithWhereWithoutAssigned_byInput[]
    deleteMany?: EventScannerScalarWhereInput | EventScannerScalarWhereInput[]
  }

  export type EventScannerUncheckedUpdateManyWithoutScannerNestedInput = {
    create?: XOR<EventScannerCreateWithoutScannerInput, EventScannerUncheckedCreateWithoutScannerInput> | EventScannerCreateWithoutScannerInput[] | EventScannerUncheckedCreateWithoutScannerInput[]
    connectOrCreate?: EventScannerCreateOrConnectWithoutScannerInput | EventScannerCreateOrConnectWithoutScannerInput[]
    upsert?: EventScannerUpsertWithWhereUniqueWithoutScannerInput | EventScannerUpsertWithWhereUniqueWithoutScannerInput[]
    createMany?: EventScannerCreateManyScannerInputEnvelope
    set?: EventScannerWhereUniqueInput | EventScannerWhereUniqueInput[]
    disconnect?: EventScannerWhereUniqueInput | EventScannerWhereUniqueInput[]
    delete?: EventScannerWhereUniqueInput | EventScannerWhereUniqueInput[]
    connect?: EventScannerWhereUniqueInput | EventScannerWhereUniqueInput[]
    update?: EventScannerUpdateWithWhereUniqueWithoutScannerInput | EventScannerUpdateWithWhereUniqueWithoutScannerInput[]
    updateMany?: EventScannerUpdateManyWithWhereWithoutScannerInput | EventScannerUpdateManyWithWhereWithoutScannerInput[]
    deleteMany?: EventScannerScalarWhereInput | EventScannerScalarWhereInput[]
  }

  export type EventMediaUncheckedUpdateManyWithoutUploaded_byNestedInput = {
    create?: XOR<EventMediaCreateWithoutUploaded_byInput, EventMediaUncheckedCreateWithoutUploaded_byInput> | EventMediaCreateWithoutUploaded_byInput[] | EventMediaUncheckedCreateWithoutUploaded_byInput[]
    connectOrCreate?: EventMediaCreateOrConnectWithoutUploaded_byInput | EventMediaCreateOrConnectWithoutUploaded_byInput[]
    upsert?: EventMediaUpsertWithWhereUniqueWithoutUploaded_byInput | EventMediaUpsertWithWhereUniqueWithoutUploaded_byInput[]
    createMany?: EventMediaCreateManyUploaded_byInputEnvelope
    set?: EventMediaWhereUniqueInput | EventMediaWhereUniqueInput[]
    disconnect?: EventMediaWhereUniqueInput | EventMediaWhereUniqueInput[]
    delete?: EventMediaWhereUniqueInput | EventMediaWhereUniqueInput[]
    connect?: EventMediaWhereUniqueInput | EventMediaWhereUniqueInput[]
    update?: EventMediaUpdateWithWhereUniqueWithoutUploaded_byInput | EventMediaUpdateWithWhereUniqueWithoutUploaded_byInput[]
    updateMany?: EventMediaUpdateManyWithWhereWithoutUploaded_byInput | EventMediaUpdateManyWithWhereWithoutUploaded_byInput[]
    deleteMany?: EventMediaScalarWhereInput | EventMediaScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutEventInput = {
    create?: XOR<UserCreateWithoutEventInput, UserUncheckedCreateWithoutEventInput>
    connectOrCreate?: UserCreateOrConnectWithoutEventInput
    connect?: UserWhereUniqueInput
  }

  export type EventAttendeeCreateNestedManyWithoutEventInput = {
    create?: XOR<EventAttendeeCreateWithoutEventInput, EventAttendeeUncheckedCreateWithoutEventInput> | EventAttendeeCreateWithoutEventInput[] | EventAttendeeUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventAttendeeCreateOrConnectWithoutEventInput | EventAttendeeCreateOrConnectWithoutEventInput[]
    createMany?: EventAttendeeCreateManyEventInputEnvelope
    connect?: EventAttendeeWhereUniqueInput | EventAttendeeWhereUniqueInput[]
  }

  export type EventScannerCreateNestedManyWithoutEventInput = {
    create?: XOR<EventScannerCreateWithoutEventInput, EventScannerUncheckedCreateWithoutEventInput> | EventScannerCreateWithoutEventInput[] | EventScannerUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventScannerCreateOrConnectWithoutEventInput | EventScannerCreateOrConnectWithoutEventInput[]
    createMany?: EventScannerCreateManyEventInputEnvelope
    connect?: EventScannerWhereUniqueInput | EventScannerWhereUniqueInput[]
  }

  export type EventMediaCreateNestedManyWithoutEventInput = {
    create?: XOR<EventMediaCreateWithoutEventInput, EventMediaUncheckedCreateWithoutEventInput> | EventMediaCreateWithoutEventInput[] | EventMediaUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventMediaCreateOrConnectWithoutEventInput | EventMediaCreateOrConnectWithoutEventInput[]
    createMany?: EventMediaCreateManyEventInputEnvelope
    connect?: EventMediaWhereUniqueInput | EventMediaWhereUniqueInput[]
  }

  export type EventAttendeeUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<EventAttendeeCreateWithoutEventInput, EventAttendeeUncheckedCreateWithoutEventInput> | EventAttendeeCreateWithoutEventInput[] | EventAttendeeUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventAttendeeCreateOrConnectWithoutEventInput | EventAttendeeCreateOrConnectWithoutEventInput[]
    createMany?: EventAttendeeCreateManyEventInputEnvelope
    connect?: EventAttendeeWhereUniqueInput | EventAttendeeWhereUniqueInput[]
  }

  export type EventScannerUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<EventScannerCreateWithoutEventInput, EventScannerUncheckedCreateWithoutEventInput> | EventScannerCreateWithoutEventInput[] | EventScannerUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventScannerCreateOrConnectWithoutEventInput | EventScannerCreateOrConnectWithoutEventInput[]
    createMany?: EventScannerCreateManyEventInputEnvelope
    connect?: EventScannerWhereUniqueInput | EventScannerWhereUniqueInput[]
  }

  export type EventMediaUncheckedCreateNestedManyWithoutEventInput = {
    create?: XOR<EventMediaCreateWithoutEventInput, EventMediaUncheckedCreateWithoutEventInput> | EventMediaCreateWithoutEventInput[] | EventMediaUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventMediaCreateOrConnectWithoutEventInput | EventMediaCreateOrConnectWithoutEventInput[]
    createMany?: EventMediaCreateManyEventInputEnvelope
    connect?: EventMediaWhereUniqueInput | EventMediaWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserUpdateOneRequiredWithoutEventNestedInput = {
    create?: XOR<UserCreateWithoutEventInput, UserUncheckedCreateWithoutEventInput>
    connectOrCreate?: UserCreateOrConnectWithoutEventInput
    upsert?: UserUpsertWithoutEventInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEventInput, UserUpdateWithoutEventInput>, UserUncheckedUpdateWithoutEventInput>
  }

  export type EventAttendeeUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventAttendeeCreateWithoutEventInput, EventAttendeeUncheckedCreateWithoutEventInput> | EventAttendeeCreateWithoutEventInput[] | EventAttendeeUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventAttendeeCreateOrConnectWithoutEventInput | EventAttendeeCreateOrConnectWithoutEventInput[]
    upsert?: EventAttendeeUpsertWithWhereUniqueWithoutEventInput | EventAttendeeUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventAttendeeCreateManyEventInputEnvelope
    set?: EventAttendeeWhereUniqueInput | EventAttendeeWhereUniqueInput[]
    disconnect?: EventAttendeeWhereUniqueInput | EventAttendeeWhereUniqueInput[]
    delete?: EventAttendeeWhereUniqueInput | EventAttendeeWhereUniqueInput[]
    connect?: EventAttendeeWhereUniqueInput | EventAttendeeWhereUniqueInput[]
    update?: EventAttendeeUpdateWithWhereUniqueWithoutEventInput | EventAttendeeUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventAttendeeUpdateManyWithWhereWithoutEventInput | EventAttendeeUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventAttendeeScalarWhereInput | EventAttendeeScalarWhereInput[]
  }

  export type EventScannerUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventScannerCreateWithoutEventInput, EventScannerUncheckedCreateWithoutEventInput> | EventScannerCreateWithoutEventInput[] | EventScannerUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventScannerCreateOrConnectWithoutEventInput | EventScannerCreateOrConnectWithoutEventInput[]
    upsert?: EventScannerUpsertWithWhereUniqueWithoutEventInput | EventScannerUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventScannerCreateManyEventInputEnvelope
    set?: EventScannerWhereUniqueInput | EventScannerWhereUniqueInput[]
    disconnect?: EventScannerWhereUniqueInput | EventScannerWhereUniqueInput[]
    delete?: EventScannerWhereUniqueInput | EventScannerWhereUniqueInput[]
    connect?: EventScannerWhereUniqueInput | EventScannerWhereUniqueInput[]
    update?: EventScannerUpdateWithWhereUniqueWithoutEventInput | EventScannerUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventScannerUpdateManyWithWhereWithoutEventInput | EventScannerUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventScannerScalarWhereInput | EventScannerScalarWhereInput[]
  }

  export type EventMediaUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventMediaCreateWithoutEventInput, EventMediaUncheckedCreateWithoutEventInput> | EventMediaCreateWithoutEventInput[] | EventMediaUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventMediaCreateOrConnectWithoutEventInput | EventMediaCreateOrConnectWithoutEventInput[]
    upsert?: EventMediaUpsertWithWhereUniqueWithoutEventInput | EventMediaUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventMediaCreateManyEventInputEnvelope
    set?: EventMediaWhereUniqueInput | EventMediaWhereUniqueInput[]
    disconnect?: EventMediaWhereUniqueInput | EventMediaWhereUniqueInput[]
    delete?: EventMediaWhereUniqueInput | EventMediaWhereUniqueInput[]
    connect?: EventMediaWhereUniqueInput | EventMediaWhereUniqueInput[]
    update?: EventMediaUpdateWithWhereUniqueWithoutEventInput | EventMediaUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventMediaUpdateManyWithWhereWithoutEventInput | EventMediaUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventMediaScalarWhereInput | EventMediaScalarWhereInput[]
  }

  export type EventAttendeeUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventAttendeeCreateWithoutEventInput, EventAttendeeUncheckedCreateWithoutEventInput> | EventAttendeeCreateWithoutEventInput[] | EventAttendeeUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventAttendeeCreateOrConnectWithoutEventInput | EventAttendeeCreateOrConnectWithoutEventInput[]
    upsert?: EventAttendeeUpsertWithWhereUniqueWithoutEventInput | EventAttendeeUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventAttendeeCreateManyEventInputEnvelope
    set?: EventAttendeeWhereUniqueInput | EventAttendeeWhereUniqueInput[]
    disconnect?: EventAttendeeWhereUniqueInput | EventAttendeeWhereUniqueInput[]
    delete?: EventAttendeeWhereUniqueInput | EventAttendeeWhereUniqueInput[]
    connect?: EventAttendeeWhereUniqueInput | EventAttendeeWhereUniqueInput[]
    update?: EventAttendeeUpdateWithWhereUniqueWithoutEventInput | EventAttendeeUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventAttendeeUpdateManyWithWhereWithoutEventInput | EventAttendeeUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventAttendeeScalarWhereInput | EventAttendeeScalarWhereInput[]
  }

  export type EventScannerUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventScannerCreateWithoutEventInput, EventScannerUncheckedCreateWithoutEventInput> | EventScannerCreateWithoutEventInput[] | EventScannerUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventScannerCreateOrConnectWithoutEventInput | EventScannerCreateOrConnectWithoutEventInput[]
    upsert?: EventScannerUpsertWithWhereUniqueWithoutEventInput | EventScannerUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventScannerCreateManyEventInputEnvelope
    set?: EventScannerWhereUniqueInput | EventScannerWhereUniqueInput[]
    disconnect?: EventScannerWhereUniqueInput | EventScannerWhereUniqueInput[]
    delete?: EventScannerWhereUniqueInput | EventScannerWhereUniqueInput[]
    connect?: EventScannerWhereUniqueInput | EventScannerWhereUniqueInput[]
    update?: EventScannerUpdateWithWhereUniqueWithoutEventInput | EventScannerUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventScannerUpdateManyWithWhereWithoutEventInput | EventScannerUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventScannerScalarWhereInput | EventScannerScalarWhereInput[]
  }

  export type EventMediaUncheckedUpdateManyWithoutEventNestedInput = {
    create?: XOR<EventMediaCreateWithoutEventInput, EventMediaUncheckedCreateWithoutEventInput> | EventMediaCreateWithoutEventInput[] | EventMediaUncheckedCreateWithoutEventInput[]
    connectOrCreate?: EventMediaCreateOrConnectWithoutEventInput | EventMediaCreateOrConnectWithoutEventInput[]
    upsert?: EventMediaUpsertWithWhereUniqueWithoutEventInput | EventMediaUpsertWithWhereUniqueWithoutEventInput[]
    createMany?: EventMediaCreateManyEventInputEnvelope
    set?: EventMediaWhereUniqueInput | EventMediaWhereUniqueInput[]
    disconnect?: EventMediaWhereUniqueInput | EventMediaWhereUniqueInput[]
    delete?: EventMediaWhereUniqueInput | EventMediaWhereUniqueInput[]
    connect?: EventMediaWhereUniqueInput | EventMediaWhereUniqueInput[]
    update?: EventMediaUpdateWithWhereUniqueWithoutEventInput | EventMediaUpdateWithWhereUniqueWithoutEventInput[]
    updateMany?: EventMediaUpdateManyWithWhereWithoutEventInput | EventMediaUpdateManyWithWhereWithoutEventInput[]
    deleteMany?: EventMediaScalarWhereInput | EventMediaScalarWhereInput[]
  }

  export type EventCreateNestedOneWithoutEventAttendeeInput = {
    create?: XOR<EventCreateWithoutEventAttendeeInput, EventUncheckedCreateWithoutEventAttendeeInput>
    connectOrCreate?: EventCreateOrConnectWithoutEventAttendeeInput
    connect?: EventWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutEventAttendeeInput = {
    create?: XOR<UserCreateWithoutEventAttendeeInput, UserUncheckedCreateWithoutEventAttendeeInput>
    connectOrCreate?: UserCreateOrConnectWithoutEventAttendeeInput
    connect?: UserWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EventUpdateOneRequiredWithoutEventAttendeeNestedInput = {
    create?: XOR<EventCreateWithoutEventAttendeeInput, EventUncheckedCreateWithoutEventAttendeeInput>
    connectOrCreate?: EventCreateOrConnectWithoutEventAttendeeInput
    upsert?: EventUpsertWithoutEventAttendeeInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutEventAttendeeInput, EventUpdateWithoutEventAttendeeInput>, EventUncheckedUpdateWithoutEventAttendeeInput>
  }

  export type UserUpdateOneRequiredWithoutEventAttendeeNestedInput = {
    create?: XOR<UserCreateWithoutEventAttendeeInput, UserUncheckedCreateWithoutEventAttendeeInput>
    connectOrCreate?: UserCreateOrConnectWithoutEventAttendeeInput
    upsert?: UserUpsertWithoutEventAttendeeInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEventAttendeeInput, UserUpdateWithoutEventAttendeeInput>, UserUncheckedUpdateWithoutEventAttendeeInput>
  }

  export type EventCreateNestedOneWithoutEventScannerInput = {
    create?: XOR<EventCreateWithoutEventScannerInput, EventUncheckedCreateWithoutEventScannerInput>
    connectOrCreate?: EventCreateOrConnectWithoutEventScannerInput
    connect?: EventWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutScanned_eventsInput = {
    create?: XOR<UserCreateWithoutScanned_eventsInput, UserUncheckedCreateWithoutScanned_eventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutScanned_eventsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAssigned_eventsInput = {
    create?: XOR<UserCreateWithoutAssigned_eventsInput, UserUncheckedCreateWithoutAssigned_eventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssigned_eventsInput
    connect?: UserWhereUniqueInput
  }

  export type EventUpdateOneRequiredWithoutEventScannerNestedInput = {
    create?: XOR<EventCreateWithoutEventScannerInput, EventUncheckedCreateWithoutEventScannerInput>
    connectOrCreate?: EventCreateOrConnectWithoutEventScannerInput
    upsert?: EventUpsertWithoutEventScannerInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutEventScannerInput, EventUpdateWithoutEventScannerInput>, EventUncheckedUpdateWithoutEventScannerInput>
  }

  export type UserUpdateOneRequiredWithoutScanned_eventsNestedInput = {
    create?: XOR<UserCreateWithoutScanned_eventsInput, UserUncheckedCreateWithoutScanned_eventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutScanned_eventsInput
    upsert?: UserUpsertWithoutScanned_eventsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutScanned_eventsInput, UserUpdateWithoutScanned_eventsInput>, UserUncheckedUpdateWithoutScanned_eventsInput>
  }

  export type UserUpdateOneRequiredWithoutAssigned_eventsNestedInput = {
    create?: XOR<UserCreateWithoutAssigned_eventsInput, UserUncheckedCreateWithoutAssigned_eventsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssigned_eventsInput
    upsert?: UserUpsertWithoutAssigned_eventsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAssigned_eventsInput, UserUpdateWithoutAssigned_eventsInput>, UserUncheckedUpdateWithoutAssigned_eventsInput>
  }

  export type EventCreateNestedOneWithoutEventMediaInput = {
    create?: XOR<EventCreateWithoutEventMediaInput, EventUncheckedCreateWithoutEventMediaInput>
    connectOrCreate?: EventCreateOrConnectWithoutEventMediaInput
    connect?: EventWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutEventMediaInput = {
    create?: XOR<UserCreateWithoutEventMediaInput, UserUncheckedCreateWithoutEventMediaInput>
    connectOrCreate?: UserCreateOrConnectWithoutEventMediaInput
    connect?: UserWhereUniqueInput
  }

  export type EventUpdateOneRequiredWithoutEventMediaNestedInput = {
    create?: XOR<EventCreateWithoutEventMediaInput, EventUncheckedCreateWithoutEventMediaInput>
    connectOrCreate?: EventCreateOrConnectWithoutEventMediaInput
    upsert?: EventUpsertWithoutEventMediaInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutEventMediaInput, EventUpdateWithoutEventMediaInput>, EventUncheckedUpdateWithoutEventMediaInput>
  }

  export type UserUpdateOneRequiredWithoutEventMediaNestedInput = {
    create?: XOR<UserCreateWithoutEventMediaInput, UserUncheckedCreateWithoutEventMediaInput>
    connectOrCreate?: UserCreateOrConnectWithoutEventMediaInput
    upsert?: UserUpsertWithoutEventMediaInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEventMediaInput, UserUpdateWithoutEventMediaInput>, UserUncheckedUpdateWithoutEventMediaInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EventCreateWithoutCreatorInput = {
    id?: string
    name: string
    description?: string | null
    start_time: Date | string
    end_time: Date | string
    location?: string | null
    created_at?: Date | string
    EventAttendee?: EventAttendeeCreateNestedManyWithoutEventInput
    EventScanner?: EventScannerCreateNestedManyWithoutEventInput
    EventMedia?: EventMediaCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutCreatorInput = {
    id?: string
    name: string
    description?: string | null
    start_time: Date | string
    end_time: Date | string
    location?: string | null
    created_at?: Date | string
    EventAttendee?: EventAttendeeUncheckedCreateNestedManyWithoutEventInput
    EventScanner?: EventScannerUncheckedCreateNestedManyWithoutEventInput
    EventMedia?: EventMediaUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutCreatorInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutCreatorInput, EventUncheckedCreateWithoutCreatorInput>
  }

  export type EventCreateManyCreatorInputEnvelope = {
    data: EventCreateManyCreatorInput | EventCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type EventAttendeeCreateWithoutUserInput = {
    id?: string
    registered_at?: Date | string
    ticket_qr?: string | null
    status?: string
    ticket_used?: Date | string | null
    event: EventCreateNestedOneWithoutEventAttendeeInput
  }

  export type EventAttendeeUncheckedCreateWithoutUserInput = {
    id?: string
    event_id: string
    registered_at?: Date | string
    ticket_qr?: string | null
    status?: string
    ticket_used?: Date | string | null
  }

  export type EventAttendeeCreateOrConnectWithoutUserInput = {
    where: EventAttendeeWhereUniqueInput
    create: XOR<EventAttendeeCreateWithoutUserInput, EventAttendeeUncheckedCreateWithoutUserInput>
  }

  export type EventAttendeeCreateManyUserInputEnvelope = {
    data: EventAttendeeCreateManyUserInput | EventAttendeeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type EventScannerCreateWithoutAssigned_byInput = {
    id?: string
    created_at?: Date | string
    event: EventCreateNestedOneWithoutEventScannerInput
    scanner: UserCreateNestedOneWithoutScanned_eventsInput
  }

  export type EventScannerUncheckedCreateWithoutAssigned_byInput = {
    id?: string
    event_id: string
    user_id: string
    created_at?: Date | string
  }

  export type EventScannerCreateOrConnectWithoutAssigned_byInput = {
    where: EventScannerWhereUniqueInput
    create: XOR<EventScannerCreateWithoutAssigned_byInput, EventScannerUncheckedCreateWithoutAssigned_byInput>
  }

  export type EventScannerCreateManyAssigned_byInputEnvelope = {
    data: EventScannerCreateManyAssigned_byInput | EventScannerCreateManyAssigned_byInput[]
    skipDuplicates?: boolean
  }

  export type EventScannerCreateWithoutScannerInput = {
    id?: string
    created_at?: Date | string
    event: EventCreateNestedOneWithoutEventScannerInput
    assigned_by: UserCreateNestedOneWithoutAssigned_eventsInput
  }

  export type EventScannerUncheckedCreateWithoutScannerInput = {
    id?: string
    event_id: string
    assigner_id: string
    created_at?: Date | string
  }

  export type EventScannerCreateOrConnectWithoutScannerInput = {
    where: EventScannerWhereUniqueInput
    create: XOR<EventScannerCreateWithoutScannerInput, EventScannerUncheckedCreateWithoutScannerInput>
  }

  export type EventScannerCreateManyScannerInputEnvelope = {
    data: EventScannerCreateManyScannerInput | EventScannerCreateManyScannerInput[]
    skipDuplicates?: boolean
  }

  export type EventMediaCreateWithoutUploaded_byInput = {
    id?: string
    media_url: string
    caption?: string | null
    uploaded_at?: Date | string
    event: EventCreateNestedOneWithoutEventMediaInput
  }

  export type EventMediaUncheckedCreateWithoutUploaded_byInput = {
    id?: string
    event_id: string
    media_url: string
    caption?: string | null
    uploaded_at?: Date | string
  }

  export type EventMediaCreateOrConnectWithoutUploaded_byInput = {
    where: EventMediaWhereUniqueInput
    create: XOR<EventMediaCreateWithoutUploaded_byInput, EventMediaUncheckedCreateWithoutUploaded_byInput>
  }

  export type EventMediaCreateManyUploaded_byInputEnvelope = {
    data: EventMediaCreateManyUploaded_byInput | EventMediaCreateManyUploaded_byInput[]
    skipDuplicates?: boolean
  }

  export type EventUpsertWithWhereUniqueWithoutCreatorInput = {
    where: EventWhereUniqueInput
    update: XOR<EventUpdateWithoutCreatorInput, EventUncheckedUpdateWithoutCreatorInput>
    create: XOR<EventCreateWithoutCreatorInput, EventUncheckedCreateWithoutCreatorInput>
  }

  export type EventUpdateWithWhereUniqueWithoutCreatorInput = {
    where: EventWhereUniqueInput
    data: XOR<EventUpdateWithoutCreatorInput, EventUncheckedUpdateWithoutCreatorInput>
  }

  export type EventUpdateManyWithWhereWithoutCreatorInput = {
    where: EventScalarWhereInput
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyWithoutCreatorInput>
  }

  export type EventScalarWhereInput = {
    AND?: EventScalarWhereInput | EventScalarWhereInput[]
    OR?: EventScalarWhereInput[]
    NOT?: EventScalarWhereInput | EventScalarWhereInput[]
    id?: StringFilter<"Event"> | string
    name?: StringFilter<"Event"> | string
    description?: StringNullableFilter<"Event"> | string | null
    start_time?: DateTimeFilter<"Event"> | Date | string
    end_time?: DateTimeFilter<"Event"> | Date | string
    location?: StringNullableFilter<"Event"> | string | null
    created_at?: DateTimeFilter<"Event"> | Date | string
    creator_id?: StringFilter<"Event"> | string
  }

  export type EventAttendeeUpsertWithWhereUniqueWithoutUserInput = {
    where: EventAttendeeWhereUniqueInput
    update: XOR<EventAttendeeUpdateWithoutUserInput, EventAttendeeUncheckedUpdateWithoutUserInput>
    create: XOR<EventAttendeeCreateWithoutUserInput, EventAttendeeUncheckedCreateWithoutUserInput>
  }

  export type EventAttendeeUpdateWithWhereUniqueWithoutUserInput = {
    where: EventAttendeeWhereUniqueInput
    data: XOR<EventAttendeeUpdateWithoutUserInput, EventAttendeeUncheckedUpdateWithoutUserInput>
  }

  export type EventAttendeeUpdateManyWithWhereWithoutUserInput = {
    where: EventAttendeeScalarWhereInput
    data: XOR<EventAttendeeUpdateManyMutationInput, EventAttendeeUncheckedUpdateManyWithoutUserInput>
  }

  export type EventAttendeeScalarWhereInput = {
    AND?: EventAttendeeScalarWhereInput | EventAttendeeScalarWhereInput[]
    OR?: EventAttendeeScalarWhereInput[]
    NOT?: EventAttendeeScalarWhereInput | EventAttendeeScalarWhereInput[]
    id?: StringFilter<"EventAttendee"> | string
    event_id?: StringFilter<"EventAttendee"> | string
    user_id?: StringFilter<"EventAttendee"> | string
    registered_at?: DateTimeFilter<"EventAttendee"> | Date | string
    ticket_qr?: StringNullableFilter<"EventAttendee"> | string | null
    status?: StringFilter<"EventAttendee"> | string
    ticket_used?: DateTimeNullableFilter<"EventAttendee"> | Date | string | null
  }

  export type EventScannerUpsertWithWhereUniqueWithoutAssigned_byInput = {
    where: EventScannerWhereUniqueInput
    update: XOR<EventScannerUpdateWithoutAssigned_byInput, EventScannerUncheckedUpdateWithoutAssigned_byInput>
    create: XOR<EventScannerCreateWithoutAssigned_byInput, EventScannerUncheckedCreateWithoutAssigned_byInput>
  }

  export type EventScannerUpdateWithWhereUniqueWithoutAssigned_byInput = {
    where: EventScannerWhereUniqueInput
    data: XOR<EventScannerUpdateWithoutAssigned_byInput, EventScannerUncheckedUpdateWithoutAssigned_byInput>
  }

  export type EventScannerUpdateManyWithWhereWithoutAssigned_byInput = {
    where: EventScannerScalarWhereInput
    data: XOR<EventScannerUpdateManyMutationInput, EventScannerUncheckedUpdateManyWithoutAssigned_byInput>
  }

  export type EventScannerScalarWhereInput = {
    AND?: EventScannerScalarWhereInput | EventScannerScalarWhereInput[]
    OR?: EventScannerScalarWhereInput[]
    NOT?: EventScannerScalarWhereInput | EventScannerScalarWhereInput[]
    id?: StringFilter<"EventScanner"> | string
    event_id?: StringFilter<"EventScanner"> | string
    user_id?: StringFilter<"EventScanner"> | string
    assigner_id?: StringFilter<"EventScanner"> | string
    created_at?: DateTimeFilter<"EventScanner"> | Date | string
  }

  export type EventScannerUpsertWithWhereUniqueWithoutScannerInput = {
    where: EventScannerWhereUniqueInput
    update: XOR<EventScannerUpdateWithoutScannerInput, EventScannerUncheckedUpdateWithoutScannerInput>
    create: XOR<EventScannerCreateWithoutScannerInput, EventScannerUncheckedCreateWithoutScannerInput>
  }

  export type EventScannerUpdateWithWhereUniqueWithoutScannerInput = {
    where: EventScannerWhereUniqueInput
    data: XOR<EventScannerUpdateWithoutScannerInput, EventScannerUncheckedUpdateWithoutScannerInput>
  }

  export type EventScannerUpdateManyWithWhereWithoutScannerInput = {
    where: EventScannerScalarWhereInput
    data: XOR<EventScannerUpdateManyMutationInput, EventScannerUncheckedUpdateManyWithoutScannerInput>
  }

  export type EventMediaUpsertWithWhereUniqueWithoutUploaded_byInput = {
    where: EventMediaWhereUniqueInput
    update: XOR<EventMediaUpdateWithoutUploaded_byInput, EventMediaUncheckedUpdateWithoutUploaded_byInput>
    create: XOR<EventMediaCreateWithoutUploaded_byInput, EventMediaUncheckedCreateWithoutUploaded_byInput>
  }

  export type EventMediaUpdateWithWhereUniqueWithoutUploaded_byInput = {
    where: EventMediaWhereUniqueInput
    data: XOR<EventMediaUpdateWithoutUploaded_byInput, EventMediaUncheckedUpdateWithoutUploaded_byInput>
  }

  export type EventMediaUpdateManyWithWhereWithoutUploaded_byInput = {
    where: EventMediaScalarWhereInput
    data: XOR<EventMediaUpdateManyMutationInput, EventMediaUncheckedUpdateManyWithoutUploaded_byInput>
  }

  export type EventMediaScalarWhereInput = {
    AND?: EventMediaScalarWhereInput | EventMediaScalarWhereInput[]
    OR?: EventMediaScalarWhereInput[]
    NOT?: EventMediaScalarWhereInput | EventMediaScalarWhereInput[]
    id?: StringFilter<"EventMedia"> | string
    event_id?: StringFilter<"EventMedia"> | string
    user_id?: StringFilter<"EventMedia"> | string
    media_url?: StringFilter<"EventMedia"> | string
    caption?: StringNullableFilter<"EventMedia"> | string | null
    uploaded_at?: DateTimeFilter<"EventMedia"> | Date | string
  }

  export type UserCreateWithoutEventInput = {
    id?: string
    email: string
    first_name: string
    last_name: string
    password: string
    created_at?: Date | string
    EventAttendee?: EventAttendeeCreateNestedManyWithoutUserInput
    assigned_events?: EventScannerCreateNestedManyWithoutAssigned_byInput
    scanned_events?: EventScannerCreateNestedManyWithoutScannerInput
    EventMedia?: EventMediaCreateNestedManyWithoutUploaded_byInput
  }

  export type UserUncheckedCreateWithoutEventInput = {
    id?: string
    email: string
    first_name: string
    last_name: string
    password: string
    created_at?: Date | string
    EventAttendee?: EventAttendeeUncheckedCreateNestedManyWithoutUserInput
    assigned_events?: EventScannerUncheckedCreateNestedManyWithoutAssigned_byInput
    scanned_events?: EventScannerUncheckedCreateNestedManyWithoutScannerInput
    EventMedia?: EventMediaUncheckedCreateNestedManyWithoutUploaded_byInput
  }

  export type UserCreateOrConnectWithoutEventInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEventInput, UserUncheckedCreateWithoutEventInput>
  }

  export type EventAttendeeCreateWithoutEventInput = {
    id?: string
    registered_at?: Date | string
    ticket_qr?: string | null
    status?: string
    ticket_used?: Date | string | null
    user: UserCreateNestedOneWithoutEventAttendeeInput
  }

  export type EventAttendeeUncheckedCreateWithoutEventInput = {
    id?: string
    user_id: string
    registered_at?: Date | string
    ticket_qr?: string | null
    status?: string
    ticket_used?: Date | string | null
  }

  export type EventAttendeeCreateOrConnectWithoutEventInput = {
    where: EventAttendeeWhereUniqueInput
    create: XOR<EventAttendeeCreateWithoutEventInput, EventAttendeeUncheckedCreateWithoutEventInput>
  }

  export type EventAttendeeCreateManyEventInputEnvelope = {
    data: EventAttendeeCreateManyEventInput | EventAttendeeCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type EventScannerCreateWithoutEventInput = {
    id?: string
    created_at?: Date | string
    scanner: UserCreateNestedOneWithoutScanned_eventsInput
    assigned_by: UserCreateNestedOneWithoutAssigned_eventsInput
  }

  export type EventScannerUncheckedCreateWithoutEventInput = {
    id?: string
    user_id: string
    assigner_id: string
    created_at?: Date | string
  }

  export type EventScannerCreateOrConnectWithoutEventInput = {
    where: EventScannerWhereUniqueInput
    create: XOR<EventScannerCreateWithoutEventInput, EventScannerUncheckedCreateWithoutEventInput>
  }

  export type EventScannerCreateManyEventInputEnvelope = {
    data: EventScannerCreateManyEventInput | EventScannerCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type EventMediaCreateWithoutEventInput = {
    id?: string
    media_url: string
    caption?: string | null
    uploaded_at?: Date | string
    uploaded_by: UserCreateNestedOneWithoutEventMediaInput
  }

  export type EventMediaUncheckedCreateWithoutEventInput = {
    id?: string
    user_id: string
    media_url: string
    caption?: string | null
    uploaded_at?: Date | string
  }

  export type EventMediaCreateOrConnectWithoutEventInput = {
    where: EventMediaWhereUniqueInput
    create: XOR<EventMediaCreateWithoutEventInput, EventMediaUncheckedCreateWithoutEventInput>
  }

  export type EventMediaCreateManyEventInputEnvelope = {
    data: EventMediaCreateManyEventInput | EventMediaCreateManyEventInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutEventInput = {
    update: XOR<UserUpdateWithoutEventInput, UserUncheckedUpdateWithoutEventInput>
    create: XOR<UserCreateWithoutEventInput, UserUncheckedCreateWithoutEventInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEventInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEventInput, UserUncheckedUpdateWithoutEventInput>
  }

  export type UserUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    EventAttendee?: EventAttendeeUpdateManyWithoutUserNestedInput
    assigned_events?: EventScannerUpdateManyWithoutAssigned_byNestedInput
    scanned_events?: EventScannerUpdateManyWithoutScannerNestedInput
    EventMedia?: EventMediaUpdateManyWithoutUploaded_byNestedInput
  }

  export type UserUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    EventAttendee?: EventAttendeeUncheckedUpdateManyWithoutUserNestedInput
    assigned_events?: EventScannerUncheckedUpdateManyWithoutAssigned_byNestedInput
    scanned_events?: EventScannerUncheckedUpdateManyWithoutScannerNestedInput
    EventMedia?: EventMediaUncheckedUpdateManyWithoutUploaded_byNestedInput
  }

  export type EventAttendeeUpsertWithWhereUniqueWithoutEventInput = {
    where: EventAttendeeWhereUniqueInput
    update: XOR<EventAttendeeUpdateWithoutEventInput, EventAttendeeUncheckedUpdateWithoutEventInput>
    create: XOR<EventAttendeeCreateWithoutEventInput, EventAttendeeUncheckedCreateWithoutEventInput>
  }

  export type EventAttendeeUpdateWithWhereUniqueWithoutEventInput = {
    where: EventAttendeeWhereUniqueInput
    data: XOR<EventAttendeeUpdateWithoutEventInput, EventAttendeeUncheckedUpdateWithoutEventInput>
  }

  export type EventAttendeeUpdateManyWithWhereWithoutEventInput = {
    where: EventAttendeeScalarWhereInput
    data: XOR<EventAttendeeUpdateManyMutationInput, EventAttendeeUncheckedUpdateManyWithoutEventInput>
  }

  export type EventScannerUpsertWithWhereUniqueWithoutEventInput = {
    where: EventScannerWhereUniqueInput
    update: XOR<EventScannerUpdateWithoutEventInput, EventScannerUncheckedUpdateWithoutEventInput>
    create: XOR<EventScannerCreateWithoutEventInput, EventScannerUncheckedCreateWithoutEventInput>
  }

  export type EventScannerUpdateWithWhereUniqueWithoutEventInput = {
    where: EventScannerWhereUniqueInput
    data: XOR<EventScannerUpdateWithoutEventInput, EventScannerUncheckedUpdateWithoutEventInput>
  }

  export type EventScannerUpdateManyWithWhereWithoutEventInput = {
    where: EventScannerScalarWhereInput
    data: XOR<EventScannerUpdateManyMutationInput, EventScannerUncheckedUpdateManyWithoutEventInput>
  }

  export type EventMediaUpsertWithWhereUniqueWithoutEventInput = {
    where: EventMediaWhereUniqueInput
    update: XOR<EventMediaUpdateWithoutEventInput, EventMediaUncheckedUpdateWithoutEventInput>
    create: XOR<EventMediaCreateWithoutEventInput, EventMediaUncheckedCreateWithoutEventInput>
  }

  export type EventMediaUpdateWithWhereUniqueWithoutEventInput = {
    where: EventMediaWhereUniqueInput
    data: XOR<EventMediaUpdateWithoutEventInput, EventMediaUncheckedUpdateWithoutEventInput>
  }

  export type EventMediaUpdateManyWithWhereWithoutEventInput = {
    where: EventMediaScalarWhereInput
    data: XOR<EventMediaUpdateManyMutationInput, EventMediaUncheckedUpdateManyWithoutEventInput>
  }

  export type EventCreateWithoutEventAttendeeInput = {
    id?: string
    name: string
    description?: string | null
    start_time: Date | string
    end_time: Date | string
    location?: string | null
    created_at?: Date | string
    creator: UserCreateNestedOneWithoutEventInput
    EventScanner?: EventScannerCreateNestedManyWithoutEventInput
    EventMedia?: EventMediaCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutEventAttendeeInput = {
    id?: string
    name: string
    description?: string | null
    start_time: Date | string
    end_time: Date | string
    location?: string | null
    created_at?: Date | string
    creator_id: string
    EventScanner?: EventScannerUncheckedCreateNestedManyWithoutEventInput
    EventMedia?: EventMediaUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutEventAttendeeInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutEventAttendeeInput, EventUncheckedCreateWithoutEventAttendeeInput>
  }

  export type UserCreateWithoutEventAttendeeInput = {
    id?: string
    email: string
    first_name: string
    last_name: string
    password: string
    created_at?: Date | string
    Event?: EventCreateNestedManyWithoutCreatorInput
    assigned_events?: EventScannerCreateNestedManyWithoutAssigned_byInput
    scanned_events?: EventScannerCreateNestedManyWithoutScannerInput
    EventMedia?: EventMediaCreateNestedManyWithoutUploaded_byInput
  }

  export type UserUncheckedCreateWithoutEventAttendeeInput = {
    id?: string
    email: string
    first_name: string
    last_name: string
    password: string
    created_at?: Date | string
    Event?: EventUncheckedCreateNestedManyWithoutCreatorInput
    assigned_events?: EventScannerUncheckedCreateNestedManyWithoutAssigned_byInput
    scanned_events?: EventScannerUncheckedCreateNestedManyWithoutScannerInput
    EventMedia?: EventMediaUncheckedCreateNestedManyWithoutUploaded_byInput
  }

  export type UserCreateOrConnectWithoutEventAttendeeInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEventAttendeeInput, UserUncheckedCreateWithoutEventAttendeeInput>
  }

  export type EventUpsertWithoutEventAttendeeInput = {
    update: XOR<EventUpdateWithoutEventAttendeeInput, EventUncheckedUpdateWithoutEventAttendeeInput>
    create: XOR<EventCreateWithoutEventAttendeeInput, EventUncheckedCreateWithoutEventAttendeeInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutEventAttendeeInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutEventAttendeeInput, EventUncheckedUpdateWithoutEventAttendeeInput>
  }

  export type EventUpdateWithoutEventAttendeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutEventNestedInput
    EventScanner?: EventScannerUpdateManyWithoutEventNestedInput
    EventMedia?: EventMediaUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutEventAttendeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    creator_id?: StringFieldUpdateOperationsInput | string
    EventScanner?: EventScannerUncheckedUpdateManyWithoutEventNestedInput
    EventMedia?: EventMediaUncheckedUpdateManyWithoutEventNestedInput
  }

  export type UserUpsertWithoutEventAttendeeInput = {
    update: XOR<UserUpdateWithoutEventAttendeeInput, UserUncheckedUpdateWithoutEventAttendeeInput>
    create: XOR<UserCreateWithoutEventAttendeeInput, UserUncheckedCreateWithoutEventAttendeeInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEventAttendeeInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEventAttendeeInput, UserUncheckedUpdateWithoutEventAttendeeInput>
  }

  export type UserUpdateWithoutEventAttendeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Event?: EventUpdateManyWithoutCreatorNestedInput
    assigned_events?: EventScannerUpdateManyWithoutAssigned_byNestedInput
    scanned_events?: EventScannerUpdateManyWithoutScannerNestedInput
    EventMedia?: EventMediaUpdateManyWithoutUploaded_byNestedInput
  }

  export type UserUncheckedUpdateWithoutEventAttendeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Event?: EventUncheckedUpdateManyWithoutCreatorNestedInput
    assigned_events?: EventScannerUncheckedUpdateManyWithoutAssigned_byNestedInput
    scanned_events?: EventScannerUncheckedUpdateManyWithoutScannerNestedInput
    EventMedia?: EventMediaUncheckedUpdateManyWithoutUploaded_byNestedInput
  }

  export type EventCreateWithoutEventScannerInput = {
    id?: string
    name: string
    description?: string | null
    start_time: Date | string
    end_time: Date | string
    location?: string | null
    created_at?: Date | string
    creator: UserCreateNestedOneWithoutEventInput
    EventAttendee?: EventAttendeeCreateNestedManyWithoutEventInput
    EventMedia?: EventMediaCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutEventScannerInput = {
    id?: string
    name: string
    description?: string | null
    start_time: Date | string
    end_time: Date | string
    location?: string | null
    created_at?: Date | string
    creator_id: string
    EventAttendee?: EventAttendeeUncheckedCreateNestedManyWithoutEventInput
    EventMedia?: EventMediaUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutEventScannerInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutEventScannerInput, EventUncheckedCreateWithoutEventScannerInput>
  }

  export type UserCreateWithoutScanned_eventsInput = {
    id?: string
    email: string
    first_name: string
    last_name: string
    password: string
    created_at?: Date | string
    Event?: EventCreateNestedManyWithoutCreatorInput
    EventAttendee?: EventAttendeeCreateNestedManyWithoutUserInput
    assigned_events?: EventScannerCreateNestedManyWithoutAssigned_byInput
    EventMedia?: EventMediaCreateNestedManyWithoutUploaded_byInput
  }

  export type UserUncheckedCreateWithoutScanned_eventsInput = {
    id?: string
    email: string
    first_name: string
    last_name: string
    password: string
    created_at?: Date | string
    Event?: EventUncheckedCreateNestedManyWithoutCreatorInput
    EventAttendee?: EventAttendeeUncheckedCreateNestedManyWithoutUserInput
    assigned_events?: EventScannerUncheckedCreateNestedManyWithoutAssigned_byInput
    EventMedia?: EventMediaUncheckedCreateNestedManyWithoutUploaded_byInput
  }

  export type UserCreateOrConnectWithoutScanned_eventsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutScanned_eventsInput, UserUncheckedCreateWithoutScanned_eventsInput>
  }

  export type UserCreateWithoutAssigned_eventsInput = {
    id?: string
    email: string
    first_name: string
    last_name: string
    password: string
    created_at?: Date | string
    Event?: EventCreateNestedManyWithoutCreatorInput
    EventAttendee?: EventAttendeeCreateNestedManyWithoutUserInput
    scanned_events?: EventScannerCreateNestedManyWithoutScannerInput
    EventMedia?: EventMediaCreateNestedManyWithoutUploaded_byInput
  }

  export type UserUncheckedCreateWithoutAssigned_eventsInput = {
    id?: string
    email: string
    first_name: string
    last_name: string
    password: string
    created_at?: Date | string
    Event?: EventUncheckedCreateNestedManyWithoutCreatorInput
    EventAttendee?: EventAttendeeUncheckedCreateNestedManyWithoutUserInput
    scanned_events?: EventScannerUncheckedCreateNestedManyWithoutScannerInput
    EventMedia?: EventMediaUncheckedCreateNestedManyWithoutUploaded_byInput
  }

  export type UserCreateOrConnectWithoutAssigned_eventsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAssigned_eventsInput, UserUncheckedCreateWithoutAssigned_eventsInput>
  }

  export type EventUpsertWithoutEventScannerInput = {
    update: XOR<EventUpdateWithoutEventScannerInput, EventUncheckedUpdateWithoutEventScannerInput>
    create: XOR<EventCreateWithoutEventScannerInput, EventUncheckedCreateWithoutEventScannerInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutEventScannerInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutEventScannerInput, EventUncheckedUpdateWithoutEventScannerInput>
  }

  export type EventUpdateWithoutEventScannerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutEventNestedInput
    EventAttendee?: EventAttendeeUpdateManyWithoutEventNestedInput
    EventMedia?: EventMediaUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutEventScannerInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    creator_id?: StringFieldUpdateOperationsInput | string
    EventAttendee?: EventAttendeeUncheckedUpdateManyWithoutEventNestedInput
    EventMedia?: EventMediaUncheckedUpdateManyWithoutEventNestedInput
  }

  export type UserUpsertWithoutScanned_eventsInput = {
    update: XOR<UserUpdateWithoutScanned_eventsInput, UserUncheckedUpdateWithoutScanned_eventsInput>
    create: XOR<UserCreateWithoutScanned_eventsInput, UserUncheckedCreateWithoutScanned_eventsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutScanned_eventsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutScanned_eventsInput, UserUncheckedUpdateWithoutScanned_eventsInput>
  }

  export type UserUpdateWithoutScanned_eventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Event?: EventUpdateManyWithoutCreatorNestedInput
    EventAttendee?: EventAttendeeUpdateManyWithoutUserNestedInput
    assigned_events?: EventScannerUpdateManyWithoutAssigned_byNestedInput
    EventMedia?: EventMediaUpdateManyWithoutUploaded_byNestedInput
  }

  export type UserUncheckedUpdateWithoutScanned_eventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Event?: EventUncheckedUpdateManyWithoutCreatorNestedInput
    EventAttendee?: EventAttendeeUncheckedUpdateManyWithoutUserNestedInput
    assigned_events?: EventScannerUncheckedUpdateManyWithoutAssigned_byNestedInput
    EventMedia?: EventMediaUncheckedUpdateManyWithoutUploaded_byNestedInput
  }

  export type UserUpsertWithoutAssigned_eventsInput = {
    update: XOR<UserUpdateWithoutAssigned_eventsInput, UserUncheckedUpdateWithoutAssigned_eventsInput>
    create: XOR<UserCreateWithoutAssigned_eventsInput, UserUncheckedCreateWithoutAssigned_eventsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAssigned_eventsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAssigned_eventsInput, UserUncheckedUpdateWithoutAssigned_eventsInput>
  }

  export type UserUpdateWithoutAssigned_eventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Event?: EventUpdateManyWithoutCreatorNestedInput
    EventAttendee?: EventAttendeeUpdateManyWithoutUserNestedInput
    scanned_events?: EventScannerUpdateManyWithoutScannerNestedInput
    EventMedia?: EventMediaUpdateManyWithoutUploaded_byNestedInput
  }

  export type UserUncheckedUpdateWithoutAssigned_eventsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Event?: EventUncheckedUpdateManyWithoutCreatorNestedInput
    EventAttendee?: EventAttendeeUncheckedUpdateManyWithoutUserNestedInput
    scanned_events?: EventScannerUncheckedUpdateManyWithoutScannerNestedInput
    EventMedia?: EventMediaUncheckedUpdateManyWithoutUploaded_byNestedInput
  }

  export type EventCreateWithoutEventMediaInput = {
    id?: string
    name: string
    description?: string | null
    start_time: Date | string
    end_time: Date | string
    location?: string | null
    created_at?: Date | string
    creator: UserCreateNestedOneWithoutEventInput
    EventAttendee?: EventAttendeeCreateNestedManyWithoutEventInput
    EventScanner?: EventScannerCreateNestedManyWithoutEventInput
  }

  export type EventUncheckedCreateWithoutEventMediaInput = {
    id?: string
    name: string
    description?: string | null
    start_time: Date | string
    end_time: Date | string
    location?: string | null
    created_at?: Date | string
    creator_id: string
    EventAttendee?: EventAttendeeUncheckedCreateNestedManyWithoutEventInput
    EventScanner?: EventScannerUncheckedCreateNestedManyWithoutEventInput
  }

  export type EventCreateOrConnectWithoutEventMediaInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutEventMediaInput, EventUncheckedCreateWithoutEventMediaInput>
  }

  export type UserCreateWithoutEventMediaInput = {
    id?: string
    email: string
    first_name: string
    last_name: string
    password: string
    created_at?: Date | string
    Event?: EventCreateNestedManyWithoutCreatorInput
    EventAttendee?: EventAttendeeCreateNestedManyWithoutUserInput
    assigned_events?: EventScannerCreateNestedManyWithoutAssigned_byInput
    scanned_events?: EventScannerCreateNestedManyWithoutScannerInput
  }

  export type UserUncheckedCreateWithoutEventMediaInput = {
    id?: string
    email: string
    first_name: string
    last_name: string
    password: string
    created_at?: Date | string
    Event?: EventUncheckedCreateNestedManyWithoutCreatorInput
    EventAttendee?: EventAttendeeUncheckedCreateNestedManyWithoutUserInput
    assigned_events?: EventScannerUncheckedCreateNestedManyWithoutAssigned_byInput
    scanned_events?: EventScannerUncheckedCreateNestedManyWithoutScannerInput
  }

  export type UserCreateOrConnectWithoutEventMediaInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEventMediaInput, UserUncheckedCreateWithoutEventMediaInput>
  }

  export type EventUpsertWithoutEventMediaInput = {
    update: XOR<EventUpdateWithoutEventMediaInput, EventUncheckedUpdateWithoutEventMediaInput>
    create: XOR<EventCreateWithoutEventMediaInput, EventUncheckedCreateWithoutEventMediaInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutEventMediaInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutEventMediaInput, EventUncheckedUpdateWithoutEventMediaInput>
  }

  export type EventUpdateWithoutEventMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutEventNestedInput
    EventAttendee?: EventAttendeeUpdateManyWithoutEventNestedInput
    EventScanner?: EventScannerUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutEventMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    creator_id?: StringFieldUpdateOperationsInput | string
    EventAttendee?: EventAttendeeUncheckedUpdateManyWithoutEventNestedInput
    EventScanner?: EventScannerUncheckedUpdateManyWithoutEventNestedInput
  }

  export type UserUpsertWithoutEventMediaInput = {
    update: XOR<UserUpdateWithoutEventMediaInput, UserUncheckedUpdateWithoutEventMediaInput>
    create: XOR<UserCreateWithoutEventMediaInput, UserUncheckedCreateWithoutEventMediaInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEventMediaInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEventMediaInput, UserUncheckedUpdateWithoutEventMediaInput>
  }

  export type UserUpdateWithoutEventMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Event?: EventUpdateManyWithoutCreatorNestedInput
    EventAttendee?: EventAttendeeUpdateManyWithoutUserNestedInput
    assigned_events?: EventScannerUpdateManyWithoutAssigned_byNestedInput
    scanned_events?: EventScannerUpdateManyWithoutScannerNestedInput
  }

  export type UserUncheckedUpdateWithoutEventMediaInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    Event?: EventUncheckedUpdateManyWithoutCreatorNestedInput
    EventAttendee?: EventAttendeeUncheckedUpdateManyWithoutUserNestedInput
    assigned_events?: EventScannerUncheckedUpdateManyWithoutAssigned_byNestedInput
    scanned_events?: EventScannerUncheckedUpdateManyWithoutScannerNestedInput
  }

  export type EventCreateManyCreatorInput = {
    id?: string
    name: string
    description?: string | null
    start_time: Date | string
    end_time: Date | string
    location?: string | null
    created_at?: Date | string
  }

  export type EventAttendeeCreateManyUserInput = {
    id?: string
    event_id: string
    registered_at?: Date | string
    ticket_qr?: string | null
    status?: string
    ticket_used?: Date | string | null
  }

  export type EventScannerCreateManyAssigned_byInput = {
    id?: string
    event_id: string
    user_id: string
    created_at?: Date | string
  }

  export type EventScannerCreateManyScannerInput = {
    id?: string
    event_id: string
    assigner_id: string
    created_at?: Date | string
  }

  export type EventMediaCreateManyUploaded_byInput = {
    id?: string
    event_id: string
    media_url: string
    caption?: string | null
    uploaded_at?: Date | string
  }

  export type EventUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    EventAttendee?: EventAttendeeUpdateManyWithoutEventNestedInput
    EventScanner?: EventScannerUpdateManyWithoutEventNestedInput
    EventMedia?: EventMediaUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    EventAttendee?: EventAttendeeUncheckedUpdateManyWithoutEventNestedInput
    EventScanner?: EventScannerUncheckedUpdateManyWithoutEventNestedInput
    EventMedia?: EventMediaUncheckedUpdateManyWithoutEventNestedInput
  }

  export type EventUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    start_time?: DateTimeFieldUpdateOperationsInput | Date | string
    end_time?: DateTimeFieldUpdateOperationsInput | Date | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventAttendeeUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    registered_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket_qr?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    ticket_used?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    event?: EventUpdateOneRequiredWithoutEventAttendeeNestedInput
  }

  export type EventAttendeeUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    event_id?: StringFieldUpdateOperationsInput | string
    registered_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket_qr?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    ticket_used?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EventAttendeeUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    event_id?: StringFieldUpdateOperationsInput | string
    registered_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket_qr?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    ticket_used?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EventScannerUpdateWithoutAssigned_byInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutEventScannerNestedInput
    scanner?: UserUpdateOneRequiredWithoutScanned_eventsNestedInput
  }

  export type EventScannerUncheckedUpdateWithoutAssigned_byInput = {
    id?: StringFieldUpdateOperationsInput | string
    event_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventScannerUncheckedUpdateManyWithoutAssigned_byInput = {
    id?: StringFieldUpdateOperationsInput | string
    event_id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventScannerUpdateWithoutScannerInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutEventScannerNestedInput
    assigned_by?: UserUpdateOneRequiredWithoutAssigned_eventsNestedInput
  }

  export type EventScannerUncheckedUpdateWithoutScannerInput = {
    id?: StringFieldUpdateOperationsInput | string
    event_id?: StringFieldUpdateOperationsInput | string
    assigner_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventScannerUncheckedUpdateManyWithoutScannerInput = {
    id?: StringFieldUpdateOperationsInput | string
    event_id?: StringFieldUpdateOperationsInput | string
    assigner_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventMediaUpdateWithoutUploaded_byInput = {
    id?: StringFieldUpdateOperationsInput | string
    media_url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
    event?: EventUpdateOneRequiredWithoutEventMediaNestedInput
  }

  export type EventMediaUncheckedUpdateWithoutUploaded_byInput = {
    id?: StringFieldUpdateOperationsInput | string
    event_id?: StringFieldUpdateOperationsInput | string
    media_url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventMediaUncheckedUpdateManyWithoutUploaded_byInput = {
    id?: StringFieldUpdateOperationsInput | string
    event_id?: StringFieldUpdateOperationsInput | string
    media_url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventAttendeeCreateManyEventInput = {
    id?: string
    user_id: string
    registered_at?: Date | string
    ticket_qr?: string | null
    status?: string
    ticket_used?: Date | string | null
  }

  export type EventScannerCreateManyEventInput = {
    id?: string
    user_id: string
    assigner_id: string
    created_at?: Date | string
  }

  export type EventMediaCreateManyEventInput = {
    id?: string
    user_id: string
    media_url: string
    caption?: string | null
    uploaded_at?: Date | string
  }

  export type EventAttendeeUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    registered_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket_qr?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    ticket_used?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    user?: UserUpdateOneRequiredWithoutEventAttendeeNestedInput
  }

  export type EventAttendeeUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    registered_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket_qr?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    ticket_used?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EventAttendeeUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    registered_at?: DateTimeFieldUpdateOperationsInput | Date | string
    ticket_qr?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    ticket_used?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type EventScannerUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    scanner?: UserUpdateOneRequiredWithoutScanned_eventsNestedInput
    assigned_by?: UserUpdateOneRequiredWithoutAssigned_eventsNestedInput
  }

  export type EventScannerUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    assigner_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventScannerUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    assigner_id?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventMediaUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    media_url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
    uploaded_by?: UserUpdateOneRequiredWithoutEventMediaNestedInput
  }

  export type EventMediaUncheckedUpdateWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    media_url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EventMediaUncheckedUpdateManyWithoutEventInput = {
    id?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    media_url?: StringFieldUpdateOperationsInput | string
    caption?: NullableStringFieldUpdateOperationsInput | string | null
    uploaded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}