const DATA_URL = "./data/showcase-data.json";
const DEFAULT_VIDEO = "https://www.w3schools.com/html/mov_bbb.mp4";

const LOCAL_DATA = {
  site: {
    name: "郭富强-项目演示",
    tagline: "面试项目作品集",
    intro: "点击项目进入详情页，查看模块树、功能亮点、视频和交付信息。",
  },
  projects: [
    {
      id: "city-natural-elements",
      slug: "city-natural-elements",
      name: "城市自然要素数据生成",
      intro: "围绕河流、绿地与地表覆盖的自动识别，适合展示数据生成、质检和成果发布的完整链路。",
      cover: {
        title: "城市自然要素",
        subtitle: "数据接入 / 识别 / 发布",
        theme: { from: "#0f172a", to: "#0f766e", accent: "#34d399" },
      },
      videoUrl: DEFAULT_VIDEO,
      tags: ["GIS", "遥感", "AI"],
      facts: [
        { label: "模块数", value: "3 个" },
        { label: "功能数", value: "9 个" },
        { label: "演示状态", value: "可播放" },
      ],
      modules: [
        {
          id: "city-natural-elements-ingest",
          slug: "data-ingest-quality",
          name: "数据接入与质检",
          intro: "统一接入多个来源并做字段校验。",
          highlight: "更适合讲数据入口和异常处理。",
          poster: {
            title: "数据接入与质检",
            subtitle: "统一管道与字段校验",
            theme: { from: "#0f172a", to: "#1d4ed8", accent: "#38bdf8" },
          },
          features: [
            {
              id: "city-natural-elements-multi-ingest",
              slug: "multi-ingest",
              name: "多源接入",
              intro: "把多个数据源拉进统一管道，展示接入、校验和异常提示。",
              highlight: "支持批次追踪和坐标统一。",
              poster: {
                title: "多源接入",
                subtitle: "统一管道与校验",
                theme: { from: "#0f172a", to: "#1d4ed8", accent: "#38bdf8" },
              },
              videoUrl: DEFAULT_VIDEO,
              bullets: ["批次识别", "字段校验", "异常标红"],
            },
            {
              id: "city-natural-elements-field-check",
              slug: "field-check",
              name: "字段校验",
              intro: "检查字段完整性和取值范围，减少后续处理中的脏数据。",
              highlight: "适合讲规则校验和异常提示。",
              poster: {
                title: "字段校验",
                subtitle: "完整性与范围检查",
                theme: { from: "#0f172a", to: "#334155", accent: "#f59e0b" },
              },
              videoUrl: DEFAULT_VIDEO,
              bullets: ["必填检查", "类型检查", "范围限制"],
            },
            {
              id: "city-natural-elements-anomaly-mark",
              slug: "anomaly-mark",
              name: "异常标注",
              intro: "把异常结果高亮到列表和地图上，便于人工复核。",
              highlight: "适合讲问题回收和质检闭环。",
              poster: {
                title: "异常标注",
                subtitle: "高亮问题与复核",
                theme: { from: "#1d4ed8", to: "#0f766e", accent: "#f472b6" },
              },
              videoUrl: DEFAULT_VIDEO,
              bullets: ["高亮定位", "复核备注", "状态回写"],
            },
          ],
        },
        {
          id: "city-natural-elements-ai",
          slug: "ai-analysis",
          name: "AI 识别与解释",
          intro: "突出模型识别结果、分层和置信度标记。",
          highlight: "更适合讲模型落地和可解释展示。",
          poster: {
            title: "AI 识别与解释",
            subtitle: "结果分层与置信度",
            theme: { from: "#1e3a8a", to: "#7c3aed", accent: "#c4b5fd" },
          },
          features: [
            {
              id: "city-natural-elements-ai-recognize",
              slug: "ai-recognize",
              name: "AI 识别",
              intro: "突出模型识别结果、分类层和置信度标记。",
              highlight: "适合讲模型落地后的可解释展示。",
              poster: {
                title: "AI 识别",
                subtitle: "结果分层与置信度",
                theme: { from: "#1e3a8a", to: "#7c3aed", accent: "#c4b5fd" },
              },
              videoUrl: DEFAULT_VIDEO,
              bullets: ["结果分层", "置信度", "可视化叠加"],
            },
            {
              id: "city-natural-elements-confidence",
              slug: "confidence-analysis",
              name: "置信度分析",
              intro: "把不同置信度的识别结果分级展示，方便快速判断风险。",
              highlight: "适合讲结果分层和人工干预。",
              poster: {
                title: "置信度分析",
                subtitle: "结果分级与判断",
                theme: { from: "#312e81", to: "#1e1b4b", accent: "#60a5fa" },
              },
              videoUrl: DEFAULT_VIDEO,
              bullets: ["分级显示", "低置信提醒", "人工回看"],
            },
            {
              id: "city-natural-elements-overlay",
              slug: "visual-overlay",
              name: "可视化叠加",
              intro: "把识别结果叠加到底图上，直观看见空间分布。",
              highlight: "适合讲地图表达和空间分析。",
              poster: {
                title: "可视化叠加",
                subtitle: "底图与结果叠层",
                theme: { from: "#7c3aed", to: "#0f172a", accent: "#f9a8d4" },
              },
              videoUrl: DEFAULT_VIDEO,
              bullets: ["叠层显示", "空间定位", "结果对照"],
            },
          ],
        },
        {
          id: "city-natural-elements-publish",
          slug: "publish-release",
          name: "成果发布",
          intro: "展示成果地图如何发布成对外演示的页面。",
          highlight: "适合讲最终交付与成果沉淀。",
          poster: {
            title: "成果发布",
            subtitle: "结果发布与切换",
            theme: { from: "#0f766e", to: "#164e63", accent: "#f59e0b" },
          },
          features: [
            {
              id: "city-natural-elements-summary",
              slug: "publish-summary",
              name: "成果汇总",
              intro: "把最终成果统一收口到一个清晰的页面结构里。",
              highlight: "适合讲成果展示和项目收尾。",
              poster: {
                title: "成果汇总",
                subtitle: "结果收口与总览",
                theme: { from: "#0f766e", to: "#134e4a", accent: "#fbbf24" },
              },
              videoUrl: DEFAULT_VIDEO,
              bullets: ["成果列表", "分类汇总", "统一入口"],
            },
            {
              id: "city-natural-elements-switch",
              slug: "page-switch",
              name: "页面切换",
              intro: "在不同展示页之间快速切换，适合演示不同成果形态。",
              highlight: "适合讲多页面之间的导航关系。",
              poster: {
                title: "页面切换",
                subtitle: "展示页与导航",
                theme: { from: "#0f172a", to: "#0f766e", accent: "#22d3ee" },
              },
              videoUrl: DEFAULT_VIDEO,
              bullets: ["导航切换", "状态保持", "页面联动"],
            },
            {
              id: "city-natural-elements-export",
              slug: "demo-export",
              name: "演示导出",
              intro: "把演示内容导出给外部查看，便于交付和分享。",
              highlight: "适合作为最终交付收口。",
              poster: {
                title: "演示导出",
                subtitle: "交付与分享",
                theme: { from: "#164e63", to: "#0f172a", accent: "#f97316" },
              },
              videoUrl: DEFAULT_VIDEO,
              bullets: ["导出格式", "外部分享", "交付说明"],
            },
          ],
        },
      ],
    },
    {
      id: "geo-aiops-platform",
      slug: "geo-aiops-platform",
      name: "GeoAIOps 告警联动平台",
      intro: "面向空间数据的监控、告警和处置编排，适合突出自动化和可观测性。",
      cover: {
        title: "GeoAIOps",
        subtitle: "监控 / 告警 / 编排",
        theme: { from: "#111827", to: "#c2410c", accent: "#f59e0b" },
      },
      videoUrl: DEFAULT_VIDEO,
      tags: ["AIOps", "告警", "编排"],
      facts: [
        { label: "模块数", value: "3 个" },
        { label: "功能数", value: "9 个" },
        { label: "演示状态", value: "已整理" },
      ],
      modules: [
        {
          id: "geo-aiops-board",
          slug: "monitor-center",
          name: "监控中心",
          intro: "实时看见空间数据指标波动和异常趋势。",
          highlight: "适合展示态势图和核心指标。",
          poster: {
            title: "监控中心",
            subtitle: "实时指标与态势",
            theme: { from: "#111827", to: "#7c2d12", accent: "#f97316" },
          },
          features: [
            {
              id: "geo-aiops-board-main",
              slug: "ops-board",
              name: "监控面板",
              intro: "把核心监控指标放到一个可扫描的面板里。",
              highlight: "适合展示态势图和核心指标。",
              poster: {
                title: "监控面板",
                subtitle: "实时指标与态势",
                theme: { from: "#111827", to: "#7c2d12", accent: "#f97316" },
              },
              videoUrl: DEFAULT_VIDEO,
              bullets: ["实时刷新", "趋势波动", "异常聚焦"],
            },
            {
              id: "geo-aiops-board-trend",
              slug: "trend-analysis",
              name: "趋势分析",
              intro: "把指标走势拉长来看，方便定位长期变化。",
              highlight: "适合讲趋势研判和异常发现。",
              poster: {
                title: "趋势分析",
                subtitle: "走势与拐点",
                theme: { from: "#7c2d12", to: "#111827", accent: "#fdba74" },
              },
              videoUrl: DEFAULT_VIDEO,
              bullets: ["走势观察", "拐点标记", "区间对比"],
            },
            {
              id: "geo-aiops-board-focus",
              slug: "anomaly-focus",
              name: "异常聚焦",
              intro: "把异常点聚焦到最显眼的地方，帮助快速处理。",
              highlight: "适合讲异常治理和快速响应。",
              poster: {
                title: "异常聚焦",
                subtitle: "定位高风险点",
                theme: { from: "#9a3412", to: "#1f2937", accent: "#fbbf24" },
              },
              videoUrl: DEFAULT_VIDEO,
              bullets: ["高亮定位", "优先级", "处理结果"],
            },
          ],
        },
        {
          id: "geo-aiops-rules",
          slug: "rules-engine",
          name: "告警规则",
          intro: "阈值、时间窗和触发条件的组合配置。",
          highlight: "可讲规则表达和联动路径。",
          poster: {
            title: "告警规则",
            subtitle: "阈值与联动动作",
            theme: { from: "#9a3412", to: "#3b1d0f", accent: "#fdba74" },
          },
          features: [
            {
              id: "geo-aiops-rule-threshold",
              slug: "threshold-definition",
              name: "阈值定义",
              intro: "通过可视化的方式配置告警阈值。",
              highlight: "适合讲规则表达和边界控制。",
              poster: {
                title: "阈值定义",
                subtitle: "规则边界配置",
                theme: { from: "#9a3412", to: "#3b1d0f", accent: "#fdba74" },
              },
              videoUrl: DEFAULT_VIDEO,
              bullets: ["阈值配置", "区间判断", "规则保存"],
            },
            {
              id: "geo-aiops-rule-window",
              slug: "time-window",
              name: "时间窗",
              intro: "控制规则在什么时间段内触发，减少无效告警。",
              highlight: "适合讲时间维度的规则设计。",
              poster: {
                title: "时间窗",
                subtitle: "触发时段控制",
                theme: { from: "#7c2d12", to: "#1f2937", accent: "#f59e0b" },
              },
              videoUrl: DEFAULT_VIDEO,
              bullets: ["时段限制", "排班适配", "节假日控制"],
            },
            {
              id: "geo-aiops-rule-action",
              slug: "action-config",
              name: "动作配置",
              intro: "定义触发后要执行的动作，比如通知、转派或升级。",
              highlight: "适合讲联动机制和执行路径。",
              poster: {
                title: "动作配置",
                subtitle: "告警联动动作",
                theme: { from: "#111827", to: "#9a3412", accent: "#fca5a5" },
              },
              videoUrl: DEFAULT_VIDEO,
              bullets: ["通知策略", "升级路径", "执行回执"],
            },
          ],
        },
        {
          id: "geo-aiops-orchestration",
          slug: "orchestration-flow",
          name: "流程编排",
          intro: "从告警到处置的联动路径，强调自动化闭环。",
          highlight: "很适合面试里讲流程设计。",
          poster: {
            title: "流程编排",
            subtitle: "告警到处置的闭环",
            theme: { from: "#7c3aed", to: "#312e81", accent: "#c4b5fd" },
          },
          features: [
            {
              id: "geo-aiops-flow-branch",
              slug: "flow-branch",
              name: "流程分支",
              intro: "根据不同告警结果走不同的处置分支。",
              highlight: "适合讲工作流设计和分流逻辑。",
              poster: {
                title: "流程分支",
                subtitle: "处置路径分流",
                theme: { from: "#7c3aed", to: "#312e81", accent: "#c4b5fd" },
              },
              videoUrl: DEFAULT_VIDEO,
              bullets: ["条件分支", "分流规则", "路径回收"],
            },
            {
              id: "geo-aiops-flow-state",
              slug: "state-transition",
              name: "状态流转",
              intro: "展示从新建到处置完成的状态变化过程。",
              highlight: "适合讲状态机和业务闭环。",
              poster: {
                title: "状态流转",
                subtitle: "任务状态变化",
                theme: { from: "#312e81", to: "#111827", accent: "#60a5fa" },
              },
              videoUrl: DEFAULT_VIDEO,
              bullets: ["状态切换", "处理中", "已完成"],
            },
            {
              id: "geo-aiops-flow-receipt",
              slug: "action-receipt",
              name: "动作回执",
              intro: "记录联动动作是否执行成功以及后续回写结果。",
              highlight: "适合讲执行结果回收。",
              poster: {
                title: "动作回执",
                subtitle: "执行结果回收",
                theme: { from: "#111827", to: "#7c3aed", accent: "#a78bfa" },
              },
              videoUrl: DEFAULT_VIDEO,
              bullets: ["执行反馈", "失败重试", "结果回写"],
            },
          ],
        },
      ],
    },
    {
      id: "meas-inspection-system",
      slug: "meas-inspection-system",
      name: "MEAS 巡检闭环系统",
      intro: "演示巡检、复核、回溯和报告导出，展示标准化流程设计与结果沉淀。",
      cover: {
        title: "MEAS 巡检",
        subtitle: "任务 / 流转 / 报告",
        theme: { from: "#0f172a", to: "#7c3aed", accent: "#a78bfa" },
      },
      videoUrl: DEFAULT_VIDEO,
      tags: ["业务流程", "巡检", "报告"],
      facts: [
        { label: "模块数", value: "3 个" },
        { label: "功能数", value: "9 个" },
        { label: "演示状态", value: "已整理" },
      ],
      modules: [
        {
          id: "meas-task-dispatch",
          slug: "task-center",
          name: "任务中心",
          intro: "把巡检任务分发给不同角色，展示任务流转。",
          highlight: "适合展示调度和责任分配。",
          poster: {
            title: "任务中心",
            subtitle: "任务派发与流转",
            theme: { from: "#312e81", to: "#7c3aed", accent: "#c084fc" },
          },
          features: [
            {
              id: "meas-task-dispatch-main",
              slug: "task-dispatch",
              name: "任务分发",
              intro: "把巡检任务分发给不同角色，展示任务流转。",
              highlight: "适合展示调度和责任分配。",
              poster: {
                title: "任务分发",
                subtitle: "任务派发与流转",
                theme: { from: "#312e81", to: "#7c3aed", accent: "#c084fc" },
              },
              videoUrl: DEFAULT_VIDEO,
              bullets: ["任务池", "责任人", "状态跟踪"],
            },
            {
              id: "meas-task-owner",
              slug: "owner-assignment",
              name: "责任人",
              intro: "为每个任务指定责任人，确保交接清晰。",
              highlight: "适合讲责任归属和协同。",
              poster: {
                title: "责任人",
                subtitle: "任务与责任归属",
                theme: { from: "#1e1b4b", to: "#312e81", accent: "#818cf8" },
              },
              videoUrl: DEFAULT_VIDEO,
              bullets: ["责任归属", "转派记录", "协同处理"],
            },
            {
              id: "meas-task-status",
              slug: "status-tracking",
              name: "状态跟踪",
              intro: "记录任务在各个环节的状态变化。",
              highlight: "适合讲追踪和可观测性。",
              poster: {
                title: "状态跟踪",
                subtitle: "流程状态变化",
                theme: { from: "#0f172a", to: "#312e81", accent: "#a5b4fc" },
              },
              videoUrl: DEFAULT_VIDEO,
              bullets: ["状态流转", "更新时间", "历史轨迹"],
            },
          ],
        },
        {
          id: "meas-form-flow",
          slug: "form-hub",
          name: "表单流转",
          intro: "从填写、复核到提交，表现完整的业务闭环。",
          highlight: "适合讲流程审批和数据校验。",
          poster: {
            title: "表单流转",
            subtitle: "填写 / 复核 / 提交",
            theme: { from: "#1e1b4b", to: "#4c1d95", accent: "#ddd6fe" },
          },
          features: [
            {
              id: "meas-form-step",
              slug: "step-clarity",
              name: "步骤清晰",
              intro: "把复杂流程拆成清晰的操作步骤。",
              highlight: "适合讲表单设计和引导。",
              poster: {
                title: "步骤清晰",
                subtitle: "操作步骤拆解",
                theme: { from: "#1e1b4b", to: "#4c1d95", accent: "#ddd6fe" },
              },
              videoUrl: DEFAULT_VIDEO,
              bullets: ["步骤提示", "流程指引", "状态标识"],
            },
            {
              id: "meas-form-review",
              slug: "review-opinion",
              name: "复核意见",
              intro: "收集复核阶段的意见与修改建议。",
              highlight: "适合讲审核协同。",
              poster: {
                title: "复核意见",
                subtitle: "审阅与反馈",
                theme: { from: "#4c1d95", to: "#1e1b4b", accent: "#c4b5fd" },
              },
              videoUrl: DEFAULT_VIDEO,
              bullets: ["意见收集", "修改建议", "复核记录"],
            },
            {
              id: "meas-form-return",
              slug: "rollback-mechanism",
              name: "回退机制",
              intro: "在不通过时回退到上一步，避免流程卡死。",
              highlight: "适合讲流程控制和异常处理。",
              poster: {
                title: "回退机制",
                subtitle: "不通过时回退",
                theme: { from: "#0f172a", to: "#4c1d95", accent: "#f0abfc" },
              },
              videoUrl: DEFAULT_VIDEO,
              bullets: ["回退节点", "修改重提", "状态恢复"],
            },
          ],
        },
        {
          id: "meas-report-export",
          slug: "report-studio",
          name: "报表中心",
          intro: "把巡检结果导成可以直接展示给面试官的报表。",
          highlight: "可作为收口展示和最终交付。",
          poster: {
            title: "报表中心",
            subtitle: "结果沉淀与交付",
            theme: { from: "#5b21b6", to: "#0f172a", accent: "#f5d0fe" },
          },
          features: [
            {
              id: "meas-report-format",
              slug: "export-format",
              name: "导出格式",
              intro: "支持把巡检结果导成多种格式。",
              highlight: "适合讲输出能力。",
              poster: {
                title: "导出格式",
                subtitle: "报表输出能力",
                theme: { from: "#5b21b6", to: "#0f172a", accent: "#f5d0fe" },
              },
              videoUrl: DEFAULT_VIDEO,
              bullets: ["多种格式", "下载入口", "快速交付"],
            },
            {
              id: "meas-report-summary",
              slug: "result-summary",
              name: "结果汇总",
              intro: "把数据、结论和状态统一汇总到报表中。",
              highlight: "适合讲结果沉淀。",
              poster: {
                title: "结果汇总",
                subtitle: "信息聚合与展示",
                theme: { from: "#4c1d95", to: "#0f172a", accent: "#ddd6fe" },
              },
              videoUrl: DEFAULT_VIDEO,
              bullets: ["数据聚合", "结论摘要", "状态总览"],
            },
            {
              id: "meas-report-delivery",
              slug: "delivery-note",
              name: "交付说明",
              intro: "把报表的使用方式和交付信息写清楚。",
              highlight: "适合讲最终交付。",
              poster: {
                title: "交付说明",
                subtitle: "使用方式与说明",
                theme: { from: "#0f172a", to: "#5b21b6", accent: "#f9a8d4" },
              },
              videoUrl: DEFAULT_VIDEO,
              bullets: ["交付边界", "使用说明", "版本信息"],
            },
          ],
        },
      ],
    },
  ],
};

const state = {
  data: null,
  route: parseRoute(),
  loading: true,
  error: "",
};

const ICONS = {
  arrow:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m0 0-6-6m6 6-6 6"/></svg>',
  play: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>',
  chevron:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 18 9 12l6-6"/></svg>',
};

function decodeRoutePart(value = "") {
  try {
    return decodeURIComponent(value);
  } catch {
    return value;
  }
}

function parseRoute() {
  const raw = location.hash.replace(/^#\/?/, "");
  const parts = raw.split("/").filter(Boolean).map(decodeRoutePart);

  if (parts[0] === "project" && parts[1]) {
    if (parts[2] === "module" && parts[3]) {
      if (parts[4] === "feature" && parts[5]) {
        return {
          view: "feature",
          slug: parts[1],
          moduleSlug: parts[3],
          featureSlug: parts[5],
        };
      }

      return {
        view: "project",
        slug: parts[1],
        moduleSlug: parts[3],
        featureSlug: "",
      };
    }

    if (parts[2] === "feature" && parts[3]) {
      return {
        view: "feature",
        slug: parts[1],
        moduleSlug: "",
        featureSlug: parts[3],
      };
    }

    return {
      view: "project",
      slug: parts[1],
      moduleSlug: "",
      featureSlug: "",
    };
  }

  return { view: "home", slug: "", moduleSlug: "", featureSlug: "" };
}

function normalizeData(data) {
  const source = data || LOCAL_DATA;
  return {
    ...source,
    projects: (source.projects || []).map(normalizeProject),
  };
}

function normalizeProject(project) {
  if (Array.isArray(project.modules) && project.modules.length) {
    return {
      ...project,
      modules: project.modules.map((module) => ({
        ...module,
        features: (module.features || []).map((feature) => ({
          ...feature,
          moduleSlug: module.slug,
        })),
      })),
    };
  }

  return {
    ...project,
    modules: [
      {
        id: `${project.id}-module`,
        slug: "overview",
        name: "模块总览",
        intro: project.intro || "",
        highlight: "兼容旧数据结构的自动分组。",
        poster: project.cover,
        features: (project.features || []).map((feature) => ({
          ...feature,
          moduleSlug: "overview",
        })),
      },
    ],
  };
}

function projectModuleCount(project) {
  return (project.modules || []).length;
}

function projectFeatureCount(project) {
  return (project.modules || []).reduce(
    (sum, module) => sum + (module.features?.length || 0),
    0,
  );
}

function totalModules(data) {
  return (data.projects || []).reduce(
    (sum, project) => sum + projectModuleCount(project),
    0,
  );
}

function totalFeatures(data) {
  return (data.projects || []).reduce(
    (sum, project) => sum + projectFeatureCount(project),
    0,
  );
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function renderIcon(name) {
  return ICONS[name] || "";
}

function projectUrl(project) {
  return `#/project/${encodeURIComponent(project.slug)}`;
}

function moduleUrl(project, module) {
  return `#/project/${encodeURIComponent(project.slug)}/module/${encodeURIComponent(module.slug)}`;
}

function featureUrl(project, module, feature) {
  return `#/project/${encodeURIComponent(project.slug)}/module/${encodeURIComponent(module.slug)}/feature/${encodeURIComponent(feature.slug)}`;
}

function getProject(data, slug) {
  return (data.projects || []).find((project) => project.slug === slug) || null;
}

function getModule(project, moduleSlug) {
  if (!moduleSlug) return null;
  return (project.modules || []).find((module) => module.slug === moduleSlug) || null;
}

function getFeatureLocation(project, moduleSlug, featureSlug) {
  if (!featureSlug) {
    return { module: null, feature: null };
  }

  if (moduleSlug) {
    const module = getModule(project, moduleSlug);
    const feature = module?.features.find((item) => item.slug === featureSlug) || null;
    return { module, feature };
  }

  for (const module of project.modules || []) {
    const feature = module.features.find((item) => item.slug === featureSlug) || null;
    if (feature) {
      return { module, feature };
    }
  }

  return { module: null, feature: null };
}

function resolveAsset(asset, fallbackTitle, fallbackSubtitle) {
  if (!asset) {
    return makeCoverSvg(fallbackTitle, fallbackSubtitle);
  }

  if (typeof asset === "string") {
    return asset;
  }

  if (asset.url) {
    return asset.url;
  }

  return makeCoverSvg(
    asset.title || fallbackTitle,
    asset.subtitle || fallbackSubtitle,
    asset.theme || asset.colors,
  );
}

function makeCoverSvg(title, subtitle, theme = {}) {
  const from = theme.from || "#0f172a";
  const to = theme.to || "#1d4ed8";
  const accent = theme.accent || "#22d3ee";

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800">
      <defs>
        <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="${from}" />
          <stop offset="100%" stop-color="${to}" />
        </linearGradient>
        <radialGradient id="glow" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stop-color="${accent}" stop-opacity="0.5" />
          <stop offset="100%" stop-color="${accent}" stop-opacity="0" />
        </radialGradient>
      </defs>
      <rect width="1200" height="800" rx="36" fill="url(#bg)" />
      <circle cx="980" cy="180" r="170" fill="url(#glow)" />
      <circle cx="220" cy="620" r="220" fill="url(#glow)" />
      <rect x="72" y="72" width="220" height="24" rx="12" fill="${accent}" fill-opacity="0.75" />
      <rect x="72" y="130" width="520" height="76" rx="20" fill="white" fill-opacity="0.08" />
      <rect x="72" y="230" width="360" height="18" rx="9" fill="white" fill-opacity="0.72" />
      <rect x="72" y="270" width="420" height="18" rx="9" fill="white" fill-opacity="0.38" />
      <rect x="72" y="350" width="640" height="260" rx="28" fill="white" fill-opacity="0.08" />
      <rect x="104" y="390" width="120" height="180" rx="20" fill="white" fill-opacity="0.12" />
      <rect x="244" y="360" width="120" height="210" rx="20" fill="${accent}" fill-opacity="0.58" />
      <rect x="384" y="420" width="120" height="150" rx="20" fill="white" fill-opacity="0.22" />
      <rect x="524" y="380" width="120" height="190" rx="20" fill="white" fill-opacity="0.12" />
      <text x="72" y="716" fill="white" font-size="56" font-family="Inter, Arial, sans-serif" font-weight="800">${escapeHtml(title)}</text>
      <text x="72" y="764" fill="white" font-size="26" font-family="Inter, Arial, sans-serif" opacity="0.78">${escapeHtml(subtitle)}</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function showView(viewId) {
  document.querySelectorAll("#app > .view").forEach((view) => {
    view.style.display = view.id === viewId ? "" : "none";
  });
}

function renderFacts(target, facts = []) {
  target.innerHTML = "";
  facts.forEach((fact) => {
    const pill = document.createElement("div");
    pill.className = "fact-pill";

    const label = document.createElement("span");
    label.textContent = fact.label;

    const value = document.createElement("strong");
    value.textContent = fact.value;

    pill.appendChild(label);
    pill.appendChild(value);
    target.appendChild(pill);
  });
}

function updateTitle(data, route, project, module, feature) {
  if (route.view === "feature" && project && feature) {
    document.title = module
      ? `${feature.name} · ${module.name} · ${data.site.name}`
      : `${feature.name} · ${data.site.name}`;
    return;
  }

  if (route.view === "project" && project) {
    document.title = module
      ? `${project.name} · ${module.name} · ${data.site.name}`
      : `${project.name} · ${data.site.name}`;
    return;
  }

  document.title = `${data.site.name} · ${data.site.tagline}`;
}

function createProjectCard(project, index) {
  const cover = resolveAsset(project.cover, project.name, project.intro);
  const card = document.createElement("a");
  card.className = "project-card";
  card.style.setProperty("--delay", `${index * 0.07}s`);
  card.href = projectUrl(project);

  const shine = document.createElement("div");
  shine.className = "card-shine";
  shine.setAttribute("aria-hidden", "true");

  const media = document.createElement("div");
  media.className = "project-media";

  const img = document.createElement("img");
  img.src = cover;
  img.alt = project.name;
  img.loading = "lazy";

  const overlay = document.createElement("div");
  overlay.className = "media-overlay";

  const playBadge = document.createElement("span");
  playBadge.className = "play-badge";
  playBadge.innerHTML = `${renderIcon("play")} <em>查看详情</em>`;

  const countBadge = document.createElement("span");
  countBadge.className = "count-badge";
  countBadge.textContent = `${projectModuleCount(project)} 模块 / ${projectFeatureCount(project)} 功能`;

  overlay.appendChild(playBadge);
  overlay.appendChild(countBadge);
  media.appendChild(img);
  media.appendChild(overlay);

  const info = document.createElement("div");
  info.className = "project-info";

  const tags = document.createElement("div");
  tags.className = "tags";
  (project.tags || []).slice(0, 4).forEach((tag) => {
    const chip = document.createElement("span");
    chip.className = "chip";
    chip.textContent = tag;
    tags.appendChild(chip);
  });

  const h3 = document.createElement("h3");
  h3.textContent = project.name;

  const p = document.createElement("p");
  p.textContent = project.intro;

  const metaRow = document.createElement("div");
  metaRow.className = "meta-row";

  const meta = document.createElement("span");
  meta.className = "date";
  meta.textContent = `${projectModuleCount(project)} 个模块`;

  const arrow = document.createElement("span");
  arrow.className = "arrow";
  arrow.innerHTML = renderIcon("arrow");

  metaRow.appendChild(meta);
  metaRow.appendChild(arrow);

  info.appendChild(tags);
  info.appendChild(h3);
  info.appendChild(p);
  info.appendChild(metaRow);

  card.appendChild(shine);
  card.appendChild(media);
  card.appendChild(info);
  return card;
}

function createFeatureCard(project, feature, isActive) {
  const poster = resolveAsset(feature.poster, feature.name, feature.intro);
  const card = document.createElement("a");
  card.className = `feature-card${isActive ? " active" : ""}`;

  const module =
    getModule(project, feature.moduleSlug) || project.modules[0];
  card.href = module ? featureUrl(project, module, feature) : projectUrl(project);

  const media = document.createElement("div");
  media.className = "feature-media";

  const img = document.createElement("img");
  img.src = poster;
  img.alt = feature.name;
  img.loading = "lazy";

  const chip = document.createElement("div");
  chip.className = "feature-chip";
  chip.innerHTML = `${renderIcon("play")} <span>查看详情</span>`;

  media.appendChild(img);
  media.appendChild(chip);

  const info = document.createElement("div");
  info.className = "feature-info";

  const head = document.createElement("div");
  head.className = "feature-head";

  const strong = document.createElement("strong");
  strong.textContent = feature.name;

  head.appendChild(strong);

  if (feature.highlight) {
    const span = document.createElement("span");
    span.textContent = feature.highlight;
    head.appendChild(span);
  }

  const p = document.createElement("p");
  p.textContent = feature.intro;

  info.appendChild(head);
  info.appendChild(p);

  card.appendChild(media);
  card.appendChild(info);
  return card;
}

function createModuleNode(project, module, index, isOpen, activeFeatureSlug) {
  const node = document.createElement("details");
  node.className = "module-node";
  node.open = isOpen;

  const summary = document.createElement("summary");

  const main = document.createElement("div");
  main.className = "module-summary-main";

  const indexMark = document.createElement("span");
  indexMark.className = "module-index";
  indexMark.textContent = String(index + 1).padStart(2, "0");

  const copy = document.createElement("div");
  copy.className = "module-summary-copy";

  const title = document.createElement("strong");
  title.textContent = module.name;

  const intro = document.createElement("p");
  intro.textContent = module.intro || module.highlight || "";

  copy.appendChild(title);
  copy.appendChild(intro);
  main.appendChild(indexMark);
  main.appendChild(copy);

  const meta = document.createElement("div");
  meta.className = "module-summary-meta";

  const count = document.createElement("span");
  count.className = "count-badge";
  count.textContent = `${module.features.length} 个功能`;

  const chevron = document.createElement("span");
  chevron.className = "module-chevron";
  chevron.innerHTML = renderIcon("chevron");

  meta.appendChild(count);
  meta.appendChild(chevron);

  summary.appendChild(main);
  summary.appendChild(meta);

  const body = document.createElement("div");
  body.className = "module-body";

  const description = document.createElement("p");
  description.className = "module-highlight";
  description.textContent = module.highlight || "";
  body.appendChild(description);

  const featureGrid = document.createElement("section");
  featureGrid.className = "feature-grid module-feature-grid";

  module.features.forEach((feature) => {
    featureGrid.appendChild(
      createFeatureCard(project, feature, feature.slug === activeFeatureSlug),
    );
  });

  body.appendChild(featureGrid);
  node.appendChild(summary);
  node.appendChild(body);
  return node;
}

function renderHome(data) {
  showView("home-view");

  document.getElementById("home-site-name").textContent = data.site.name;
  document.getElementById("home-site-tagline").textContent = data.site.tagline;
  document.getElementById("home-stats").textContent =
    `${data.projects.length} 个项目 · ${totalModules(data)} 个模块 · ${totalFeatures(data)} 个功能`;
  document.getElementById("home-project-count").textContent =
    `${data.projects.length} 个项目`;

  const gallery = document.getElementById("project-gallery");
  gallery.innerHTML = "";
  data.projects.forEach((project, index) => {
    gallery.appendChild(createProjectCard(project, index));
  });

  updateTitle(data, state.route);
}

function renderProjectPage(data, project) {
  showView("project-view");

  const cover = resolveAsset(project.cover, project.name, project.intro);
  const activeFeatureInfo = getFeatureLocation(
    project,
    state.route.moduleSlug,
    state.route.featureSlug,
  );
  const activeModule =
    getModule(project, state.route.moduleSlug) || activeFeatureInfo.module || null;

  document.getElementById("project-site-name").textContent = data.site.name;
  document.getElementById("project-tag").textContent =
    project.tags?.[0] || "项目总览";
  document.getElementById("project-name").textContent = project.name;
  document.getElementById("project-intro").textContent = project.intro;
  renderFacts(document.getElementById("project-facts"), project.facts || []);

  const coverImg = document.getElementById("project-cover-img");
  coverImg.src = cover;
  coverImg.alt = project.name;

  const video = document.getElementById("project-video");
  setVideoSource(video, project.videoUrl || DEFAULT_VIDEO, cover);

  document.getElementById("project-feature-count").textContent =
    `${projectModuleCount(project)} 个模块`;

  const moduleTree = document.getElementById("module-tree");
  moduleTree.innerHTML = "";

  project.modules.forEach((module, index) => {
    const isOpen =
      module.slug === activeModule?.slug || (!activeModule && index === 0);

    moduleTree.appendChild(
      createModuleNode(
        project,
        module,
        index,
        isOpen,
        activeFeatureInfo.feature?.slug || "",
      ),
    );
  });

  updateTitle(
    data,
    state.route,
    project,
    activeModule,
    activeFeatureInfo.feature || null,
  );
}

function setVideoSource(video, source, fallbackPoster) {
  video.pause();
  video.autoplay = true;
  video.muted = true;
  video.poster = fallbackPoster;
  video.onloadeddata = () => {
    video.play().catch(() => {
      // Browser autoplay policies may still require a user gesture.
    });
  };
  video.src = source;
  video.load();
}

function openCinema(frame) {
  const sourceVideo = frame.querySelector("video");
  const cinema = document.getElementById("video-cinema");
  const cinemaVideo = document.getElementById("cinema-video");
  const cinemaTitle = document.getElementById("cinema-title");
  if (!sourceVideo?.currentSrc && !sourceVideo?.src) return;

  const currentTime = sourceVideo.currentTime || 0;
  cinemaTitle.textContent =
    document.getElementById("feature-title")?.textContent ||
    document.getElementById("project-name")?.textContent ||
    "视频预览";
  cinema.hidden = false;
  document.body.classList.add("cinema-open");

  cinemaVideo.poster = sourceVideo.poster || "";
  cinemaVideo.muted = sourceVideo.muted;
  cinemaVideo.src = sourceVideo.currentSrc || sourceVideo.src;
  cinemaVideo.onloadedmetadata = () => {
    if (Number.isFinite(currentTime) && currentTime > 0) {
      cinemaVideo.currentTime = Math.min(currentTime, cinemaVideo.duration || currentTime);
    }
    cinemaVideo.play().catch(() => {});
  };
  cinemaVideo.load();
}

function closeCinema() {
  const cinema = document.getElementById("video-cinema");
  const cinemaVideo = document.getElementById("cinema-video");
  if (!cinema || cinema.hidden) return;

  cinemaVideo.pause();
  cinemaVideo.removeAttribute("src");
  cinemaVideo.removeAttribute("poster");
  cinemaVideo.load();
  cinema.hidden = true;
  document.body.classList.remove("cinema-open");
}

function renderFeaturePage(data, project, feature) {
  showView("feature-view");

  const location = getFeatureLocation(
    project,
    state.route.moduleSlug,
    feature.slug,
  );
  const module = location.module;
  const poster = resolveAsset(
    feature.poster || module?.poster || project.cover,
    feature.name,
    feature.intro,
  );

  document.getElementById("feature-site-name").textContent = data.site.name;
  document.getElementById("feature-module").textContent = module
    ? `${project.name} / ${module.name}`
    : project.name;

  const backLink = document.getElementById("feature-back-to-project");
  backLink.href = module ? moduleUrl(project, module) : projectUrl(project);
  backLink.textContent = module ? "返回模块" : "返回项目";

  const video = document.getElementById("feature-video");
  const videoEmptyState = document.getElementById("feature-video-empty");
  if (feature.videoUrl) {
    video.hidden = false;
    videoEmptyState.hidden = true;
    document
      .querySelector('[data-fullscreen-target="feature-video-frame"]')
      ?.removeAttribute("hidden");
    setVideoSource(video, feature.videoUrl, poster);
  } else {
    video.pause();
    video.onloadeddata = null;
    video.removeAttribute("src");
    video.removeAttribute("poster");
    video.load();
    video.hidden = true;
    videoEmptyState.hidden = false;
    document
      .querySelector('[data-fullscreen-target="feature-video-frame"]')
      ?.setAttribute("hidden", "");
  }

  document.getElementById("feature-title").textContent = feature.name;
  document.getElementById("feature-intro").textContent = feature.intro;
  document.getElementById("feature-highlight").textContent =
    feature.highlight || "";

  const bulletsList = document.getElementById("feature-bullets");
  bulletsList.innerHTML = "";
  (feature.bullets || []).forEach((bullet) => {
    const li = document.createElement("li");
    li.textContent = bullet;
    bulletsList.appendChild(li);
  });

  updateTitle(data, state.route, project, module, feature);
}

async function loadData() {
  try {
    const response = await fetch(DATA_URL, { cache: "no-store" });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return normalizeData(await response.json());
  } catch {
    return normalizeData(LOCAL_DATA);
  }
}

function render() {
  if (state.loading) {
    showView("loading-view");
    return;
  }

  if (state.error) {
    showView("error-view");
    document.getElementById("error-message").textContent = state.error;
    return;
  }

  const data = state.data;
  if (!data) return;

  if (state.route.view === "project") {
    const project = getProject(data, state.route.slug);
    if (!project) {
      renderHome(data);
      return;
    }

    renderProjectPage(data, project);
    return;
  }

  if (state.route.view === "feature") {
    const project = getProject(data, state.route.slug);
    if (!project) {
      renderHome(data);
      return;
    }

    const location = getFeatureLocation(
      project,
      state.route.moduleSlug,
      state.route.featureSlug,
    );

    if (location.feature) {
      renderFeaturePage(data, project, location.feature);
      return;
    }

    renderProjectPage(data, project);
    return;
  }

  renderHome(data);
}

function syncCursor(e) {
  const glow = document.querySelector(".cursor-glow");
  if (!glow) return;
  glow.style.left = `${e.clientX}px`;
  glow.style.top = `${e.clientY}px`;
}

function setupEvents() {
  window.addEventListener("hashchange", () => {
    state.route = parseRoute();
    render();
  });

  document.addEventListener("click", (event) => {
    const button = event.target.closest("[data-fullscreen-target]");
    if (!button) return;

    const target = document.getElementById(button.dataset.fullscreenTarget);
    if (target) openCinema(target);
  });

  document.getElementById("cinema-close")?.addEventListener("click", closeCinema);
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeCinema();
  });

  document.addEventListener("mousemove", syncCursor);
}

async function init() {
  if (!location.hash) {
    location.hash = "#/";
  }

  setupEvents();
  state.data = await loadData();
  state.loading = false;
  render();
}

init();
