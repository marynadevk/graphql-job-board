import { GraphQLResolveInfo } from 'graphql';
import { ICompanyEntity } from 'src/interfaces/ICompanyEntity';
import { IJobEntity } from 'src/interfaces/IJobEntity';
import { IResolverContext } from 'src/interfaces/IResolverContext';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Company = {
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  jobs: Array<Job>;
  name: Scalars['String']['output'];
};

export type CompanyQuery = {
  company?: Maybe<Company>;
};


export type CompanyQueryCompanyArgs = {
  id: Scalars['ID']['input'];
};

export type CreateJobInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  title: Scalars['String']['input'];
};

export type Job = {
  company: Company;
  date: Scalars['String']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  title: Scalars['String']['output'];
};

export type JobMutation = {
  createJob?: Maybe<Job>;
  deleteJob?: Maybe<Job>;
  updateJob?: Maybe<Job>;
};


export type JobMutationCreateJobArgs = {
  input: CreateJobInput;
};


export type JobMutationDeleteJobArgs = {
  id: Scalars['ID']['input'];
};


export type JobMutationUpdateJobArgs = {
  input: UpdateJobInput;
};

export type JobQuery = {
  job?: Maybe<Job>;
};


export type JobQueryJobArgs = {
  id: Scalars['ID']['input'];
};

export type JobSubList = {
  items: Array<Job>;
  totalCount: Scalars['Int']['output'];
};

export type JobsQuery = {
  jobs?: Maybe<JobSubList>;
};


export type JobsQueryJobsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
};

export type Query = {
  companyQuery?: Maybe<CompanyQuery>;
  jobQuery?: Maybe<JobQuery>;
  jobsQuery?: Maybe<JobsQuery>;
};

export type UpdateJobInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  title: Scalars['String']['input'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Company: ResolverTypeWrapper<ICompanyEntity>;
  CompanyQuery: ResolverTypeWrapper<Omit<CompanyQuery, 'company'> & { company?: Maybe<ResolversTypes['Company']> }>;
  CreateJobInput: CreateJobInput;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Job: ResolverTypeWrapper<IJobEntity>;
  JobMutation: ResolverTypeWrapper<Omit<JobMutation, 'createJob' | 'deleteJob' | 'updateJob'> & { createJob?: Maybe<ResolversTypes['Job']>, deleteJob?: Maybe<ResolversTypes['Job']>, updateJob?: Maybe<ResolversTypes['Job']> }>;
  JobQuery: ResolverTypeWrapper<Omit<JobQuery, 'job'> & { job?: Maybe<ResolversTypes['Job']> }>;
  JobSubList: ResolverTypeWrapper<Omit<JobSubList, 'items'> & { items: Array<ResolversTypes['Job']> }>;
  JobsQuery: ResolverTypeWrapper<Omit<JobsQuery, 'jobs'> & { jobs?: Maybe<ResolversTypes['JobSubList']> }>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  UpdateJobInput: UpdateJobInput;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  Company: ICompanyEntity;
  CompanyQuery: Omit<CompanyQuery, 'company'> & { company?: Maybe<ResolversParentTypes['Company']> };
  CreateJobInput: CreateJobInput;
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Job: IJobEntity;
  JobMutation: Omit<JobMutation, 'createJob' | 'deleteJob' | 'updateJob'> & { createJob?: Maybe<ResolversParentTypes['Job']>, deleteJob?: Maybe<ResolversParentTypes['Job']>, updateJob?: Maybe<ResolversParentTypes['Job']> };
  JobQuery: Omit<JobQuery, 'job'> & { job?: Maybe<ResolversParentTypes['Job']> };
  JobSubList: Omit<JobSubList, 'items'> & { items: Array<ResolversParentTypes['Job']> };
  JobsQuery: Omit<JobsQuery, 'jobs'> & { jobs?: Maybe<ResolversParentTypes['JobSubList']> };
  Query: {};
  String: Scalars['String']['output'];
  UpdateJobInput: UpdateJobInput;
};

export type CompanyResolvers<ContextType = IResolverContext, ParentType extends ResolversParentTypes['Company'] = ResolversParentTypes['Company']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  jobs?: Resolver<Array<ResolversTypes['Job']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CompanyQueryResolvers<ContextType = IResolverContext, ParentType extends ResolversParentTypes['CompanyQuery'] = ResolversParentTypes['CompanyQuery']> = {
  company?: Resolver<Maybe<ResolversTypes['Company']>, ParentType, ContextType, RequireFields<CompanyQueryCompanyArgs, 'id'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type JobResolvers<ContextType = IResolverContext, ParentType extends ResolversParentTypes['Job'] = ResolversParentTypes['Job']> = {
  company?: Resolver<ResolversTypes['Company'], ParentType, ContextType>;
  date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type JobMutationResolvers<ContextType = IResolverContext, ParentType extends ResolversParentTypes['JobMutation'] = ResolversParentTypes['JobMutation']> = {
  createJob?: Resolver<Maybe<ResolversTypes['Job']>, ParentType, ContextType, RequireFields<JobMutationCreateJobArgs, 'input'>>;
  deleteJob?: Resolver<Maybe<ResolversTypes['Job']>, ParentType, ContextType, RequireFields<JobMutationDeleteJobArgs, 'id'>>;
  updateJob?: Resolver<Maybe<ResolversTypes['Job']>, ParentType, ContextType, RequireFields<JobMutationUpdateJobArgs, 'input'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type JobQueryResolvers<ContextType = IResolverContext, ParentType extends ResolversParentTypes['JobQuery'] = ResolversParentTypes['JobQuery']> = {
  job?: Resolver<Maybe<ResolversTypes['Job']>, ParentType, ContextType, RequireFields<JobQueryJobArgs, 'id'>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type JobSubListResolvers<ContextType = IResolverContext, ParentType extends ResolversParentTypes['JobSubList'] = ResolversParentTypes['JobSubList']> = {
  items?: Resolver<Array<ResolversTypes['Job']>, ParentType, ContextType>;
  totalCount?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type JobsQueryResolvers<ContextType = IResolverContext, ParentType extends ResolversParentTypes['JobsQuery'] = ResolversParentTypes['JobsQuery']> = {
  jobs?: Resolver<Maybe<ResolversTypes['JobSubList']>, ParentType, ContextType, Partial<JobsQueryJobsArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = IResolverContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  companyQuery?: Resolver<Maybe<ResolversTypes['CompanyQuery']>, ParentType, ContextType>;
  jobQuery?: Resolver<Maybe<ResolversTypes['JobQuery']>, ParentType, ContextType>;
  jobsQuery?: Resolver<Maybe<ResolversTypes['JobsQuery']>, ParentType, ContextType>;
};

export type Resolvers<ContextType = IResolverContext> = {
  Company?: CompanyResolvers<ContextType>;
  CompanyQuery?: CompanyQueryResolvers<ContextType>;
  Job?: JobResolvers<ContextType>;
  JobMutation?: JobMutationResolvers<ContextType>;
  JobQuery?: JobQueryResolvers<ContextType>;
  JobSubList?: JobSubListResolvers<ContextType>;
  JobsQuery?: JobsQueryResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
};

