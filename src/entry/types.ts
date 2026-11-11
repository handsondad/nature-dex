/**
 * 一篇图鉴 = 一份数据。agent 只写这份数据，页面由 src/blocks/ 里的组件按数据画出来。
 *
 * 照片不写路径，只写名字（比如 "leaf"）：真正的文件、宽高、拍摄日期和署名
 * 由 `npm run photos` / `npm run refphoto` 写进同目录的 photos.json。
 * 名字在 photos.json 里找不到时，页面显示一个「待拍照片位」，上面写着 shoot 里的拍摄提示。
 */
import type { CreatorId } from "./people.ts";

/** YYYY-MM-DD */
export type DateString = string;

/** 一张照片的引用 */
export type Shot = {
  /** photos.json 里的名字 */
  readonly photo: string;
  /** 照片下面的一句话，也是读屏文字 */
  readonly caption: string;
  /** 还没拍时，提示要拍什么、怎么拍 */
  readonly shoot?: string;
};

/** 资料来源，正文里用 cite 引用它的 id */
export type Source = {
  readonly id: string;
  readonly title: string;
  readonly url: string;
  /** 出版方或网站，比如「中国植物志」「iNaturalist」 */
  readonly by?: string;
};

/** 我们有多确定它是谁 */
export type Certainty = "sure" | "likely" | "unsure";

export type Kind = "plant" | "animal" | "fungus" | "other";

/** 我们自己的一次遇见：只写真实发生的事 */
export type Encounter = {
  readonly date: DateString;
  /** 模糊地点：小区花坛、上学路上、奥森公园 */
  readonly where: string;
  readonly weather?: string;
  /** 大人记下的现场：看到了什么、在干什么 */
  readonly note: string;
  /** 孩子当时说的话，一字不改 */
  readonly said?: { readonly who: CreatorId; readonly text: string };
  readonly shots?: readonly Shot[];
};

/** 照片上的一个可点的观察点；x、y 是在照片上的位置（0～1） */
export type Hotspot = {
  readonly x: number;
  readonly y: number;
  readonly label: string;
  readonly detail: string;
  readonly cite?: readonly string[];
};

/**
 * 图鉴正文由一块一块组成，按顺序往下排，滚到哪块哪块动起来。
 * 每种块的写法和适用场景见 skills/naturedex-field-guide/blocks.md。
 */
export type Block =
  /** 我们的记录：一次或几次真实遇见，按时间排 */
  | { readonly type: "record"; readonly title?: string; readonly encounters: readonly Encounter[] }
  /** 认识它：在一张照片上点出识别特征 */
  | { readonly type: "hotspots"; readonly title: string; readonly shot: Shot; readonly points: readonly Hotspot[] }
  /** 凑近看：放大镜看细节 */
  | {
      readonly type: "magnifier";
      readonly title: string;
      readonly shot: Shot;
      readonly text: string;
      /** 放大几倍，默认 2.5 */
      readonly zoom?: number;
      /** 放大镜滑过去停在哪儿（照片上的 x、y，0～1），默认正中间 */
      readonly start?: readonly [number, number];
      readonly cite?: readonly string[];
    }
  /** 变化：同一个东西前后两张照片，拖动对比 */
  | {
      readonly type: "compare";
      readonly title: string;
      readonly before: Shot & { readonly label: string };
      readonly after: Shot & { readonly label: string };
      readonly text: string;
      readonly cite?: readonly string[];
    }
  /** 一步一步：生长、变态发育、一天里的变化，一张照片一步 */
  | {
      readonly type: "steps";
      readonly title: string;
      readonly steps: readonly (Shot & { readonly label: string; readonly text: string })[];
      readonly cite?: readonly string[];
    }
  /** 它的一年：每月有多少人拍到它（数据来自 research.json），再钉上我们遇见它的月份 */
  | { readonly type: "year"; readonly title: string; readonly text: string; readonly cite?: readonly string[] }
  /** 容易认错：几张照片放一起；quiz 为真时先让孩子猜哪张是它 */
  | {
      readonly type: "lookalike";
      readonly title: string;
      readonly quiz?: boolean;
      readonly items: readonly {
        readonly name: string;
        readonly scientific?: string;
        readonly shot: Shot;
        /** 是不是本篇的主角 */
        readonly self?: boolean;
        readonly tells: readonly string[];
      }[];
      readonly cite?: readonly string[];
    }
  /** 你知道吗：翻面小卡，每张一个有出处的事实 */
  | {
      readonly type: "facts";
      readonly title: string;
      readonly cards: readonly { readonly q: string; readonly a: string; readonly cite: readonly string[] }[];
    };

export type BlockType = Block["type"];

export type Entry = {
  /** 和目录名一样，小写字母、数字和短横线 */
  readonly id: string;
  /** 孩子叫它的名字，通常是中文正式名 */
  readonly name: string;
  /** 学名；不确定到种时可以写到属，比如 "Taraxacum sp." */
  readonly scientific: string;
  readonly kind: Kind;
  readonly certainty: Certainty;
  /** 分类：界、门、纲、目、科、属（中文），npm run taxon 查出来的 */
  readonly taxonomy?: readonly string[];
  /** 第一次遇见它的那天。晾衣绳按这个排；示例篇写建档那天 */
  readonly when: { readonly date: DateString; readonly label?: string };
  /** 草稿：还缺我们自己的照片或记录，晾衣绳上显示「待补」 */
  readonly draft?: boolean;
  /** 封面照，必须是我们自己拍的 */
  readonly cover: Shot;
  /** 一句话让人想认识它：一个具体、有画面的真事，≤40 字 */
  readonly hello: string;
  readonly blocks: readonly Block[];
  /** 守护提醒：说清楚该怎么做，≤60 字 */
  readonly care: string;
  /** 下次再看：一个能在现实里验证的问题 */
  readonly nextTime: string;
  readonly sources: readonly Source[];
  /** 谁一起做的这篇 */
  readonly by: readonly CreatorId[];
};

/** npm run photos / refphoto 生成的照片清单，别手改 */
export type PhotoInfo = {
  readonly src: string;
  readonly thumb: string;
  readonly w: number;
  readonly h: number;
  readonly takenAt?: DateString;
  readonly credit:
    | "ours"
    | { readonly author: string; readonly license: string; readonly url: string; readonly source: string };
};

export type PhotoManifest = Readonly<Record<string, PhotoInfo>>;

/** npm run taxon 生成的资料，别手改 */
export type Research = {
  readonly query: string;
  readonly fetchedAt: DateString;
  readonly gbif?: {
    readonly key: number;
    readonly scientificName: string;
    readonly rank: string;
    readonly path: readonly { readonly rank: string; readonly name: string }[];
  };
  readonly inat?: {
    readonly id: number;
    readonly name: string;
    readonly commonName?: string;
    readonly url: string;
    readonly wikipediaUrl?: string;
  };
  readonly wiki?: { readonly title: string; readonly extract: string; readonly url: string };
  /** 中国境内 iNaturalist 研究级观察按月计数，键是 1～12 */
  readonly months?: {
    readonly place: string;
    readonly all: Readonly<Record<string, number>>;
    readonly flowering?: Readonly<Record<string, number>>;
    readonly fruiting?: Readonly<Record<string, number>>;
    readonly url: string;
  };
};
