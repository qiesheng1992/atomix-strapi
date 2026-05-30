import type { Schema, Struct } from '@strapi/strapi';

export interface BusinessProcessNode extends Struct.ComponentSchema {
  collectionName: 'components_business_process_nodes';
  info: {
    displayName: 'process-node';
  };
  attributes: {
    className: Schema.Attribute.String;
    name: Schema.Attribute.String;
    sortOrder: Schema.Attribute.Integer;
    styleVariant: Schema.Attribute.Enumeration<['default', 'accent', 'ghost']>;
    text: Schema.Attribute.Text;
  };
}

export interface BusinessProcessRow extends Struct.ComponentSchema {
  collectionName: 'components_business_process_rows';
  info: {
    displayName: 'process-row';
  };
  attributes: {
    nodes: Schema.Attribute.Component<'business.process-node', true>;
    sortOrder: Schema.Attribute.Integer;
  };
}

export interface BusinessProcessTab extends Struct.ComponentSchema {
  collectionName: 'components_business_process_tabs';
  info: {
    displayName: 'process-tab';
  };
  attributes: {
    desc: Schema.Attribute.Text;
    key: Schema.Attribute.String;
    rows: Schema.Attribute.Component<'business.process-row', true>;
    sortOrder: Schema.Attribute.Integer;
    title: Schema.Attribute.String;
  };
}

export interface PageTemplateHero extends Struct.ComponentSchema {
  collectionName: 'components_page_template_heroes';
  info: {
    displayName: 'template-hero';
  };
  attributes: {
    ctaButtons: Schema.Attribute.Component<'shared.shared-cta-button', true>;
    subtitle: Schema.Attribute.Text;
    tags: Schema.Attribute.Component<'shared.shared-tag', true>;
    titleLine1: Schema.Attribute.String;
    titleLine1Style: Schema.Attribute.Enumeration<['normal', 'gradient']>;
    titleLine2Parts: Schema.Attribute.Component<
      'shared.shared-text-part',
      true
    >;
  };
}

export interface SectionsBusinessProcess extends Struct.ComponentSchema {
  collectionName: 'components_sections_business_processes';
  info: {
    displayName: 'business-process';
  };
  attributes: {
    defaultActiveKey: Schema.Attribute.String;
    description: Schema.Attribute.Text;
    processes: Schema.Attribute.Component<'business.process-tab', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsCardGrid extends Struct.ComponentSchema {
  collectionName: 'components_sections_card_grids';
  info: {
    displayName: 'card-grid';
  };
  attributes: {
    cards: Schema.Attribute.Component<'sections.feature-card', true>;
    description: Schema.Attribute.Text;
    sectionKey: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SectionsFaq extends Struct.ComponentSchema {
  collectionName: 'components_sections_faqs';
  info: {
    displayName: 'faq';
  };
  attributes: {
    description: Schema.Attribute.Text;
    faqMarkdown: Schema.Attribute.RichText;
    items: Schema.Attribute.Component<'sections.faq-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_sections_faq_items';
  info: {
    displayName: 'faq-item';
  };
  attributes: {
    answer: Schema.Attribute.RichText;
    question: Schema.Attribute.String;
    sortOrder: Schema.Attribute.Integer;
  };
}

export interface SectionsFeatureCard extends Struct.ComponentSchema {
  collectionName: 'components_sections_feature_cards';
  info: {
    displayName: 'feature-card';
  };
  attributes: {
    actionLabel: Schema.Attribute.String;
    backgroundImageUrl: Schema.Attribute.String;
    className: Schema.Attribute.String;
    iconUrl: Schema.Attribute.String;
    sortOrder: Schema.Attribute.Integer;
    text: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    unselectedIconUrl: Schema.Attribute.String;
    videoUrl: Schema.Attribute.String;
  };
}

export interface SectionsMediaCta extends Struct.ComponentSchema {
  collectionName: 'components_sections_media_ctas';
  info: {
    displayName: 'media-cta';
  };
  attributes: {
    ctaButtons: Schema.Attribute.Component<'shared.shared-cta-button', true>;
    imageUrl: Schema.Attribute.String;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionsSimpleTitle extends Struct.ComponentSchema {
  collectionName: 'components_sections_simple_titles';
  info: {
    displayName: 'simple-title';
  };
  attributes: {
    enabled: Schema.Attribute.Boolean;
    subtitle: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedSharedCtaButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_shared_cta_buttons';
  info: {
    displayName: 'cta-button';
  };
  attributes: {
    actionType: Schema.Attribute.Enumeration<
      ['install', 'ai_adjust', 'link', 'scroll']
    >;
    demoEmbedUrl: Schema.Attribute.String;
    demoTitle: Schema.Attribute.String;
    iconUrl: Schema.Attribute.String;
    label: Schema.Attribute.String;
    openInNewTab: Schema.Attribute.Boolean;
    sortOrder: Schema.Attribute.Integer;
    type: Schema.Attribute.Enumeration<['primary', 'secondary', 'styleTwo']>;
    url: Schema.Attribute.String;
  };
}

export interface SharedSharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_shared_seos';
  info: {
    displayName: 'seo';
  };
  attributes: {
    baiduSiteVerification: Schema.Attribute.String;
    bingSiteVerification: Schema.Attribute.String;
    canonicalUrl: Schema.Attribute.String;
    clarityProjectId: Schema.Attribute.String;
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.Text;
    metaTitle: Schema.Attribute.String;
    ogDescription: Schema.Attribute.String;
    ogImageAlt: Schema.Attribute.String;
    ogImageUrl: Schema.Attribute.String;
    ogTitle: Schema.Attribute.String;
    ogType: Schema.Attribute.Enumeration<['website', 'article', 'product']>;
    robots: Schema.Attribute.String;
    twitterCard: Schema.Attribute.Enumeration<
      ['summary', 'summary_large_image']
    >;
    twitterDescription: Schema.Attribute.Text;
    twitterImageUrl: Schema.Attribute.String;
    twitterTitle: Schema.Attribute.String;
  };
}

export interface SharedSharedTag extends Struct.ComponentSchema {
  collectionName: 'components_shared_shared_tags';
  info: {
    displayName: 'tag';
  };
  attributes: {
    label: Schema.Attribute.String;
    sortOrder: Schema.Attribute.Integer;
  };
}

export interface SharedSharedTextPart extends Struct.ComponentSchema {
  collectionName: 'components_shared_shared_text_parts';
  info: {
    displayName: 'text-part';
  };
  attributes: {
    sortOrder: Schema.Attribute.Integer;
    style: Schema.Attribute.Enumeration<['normal', 'gradient']>;
    text: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'business.process-node': BusinessProcessNode;
      'business.process-row': BusinessProcessRow;
      'business.process-tab': BusinessProcessTab;
      'page.template-hero': PageTemplateHero;
      'sections.business-process': SectionsBusinessProcess;
      'sections.card-grid': SectionsCardGrid;
      'sections.faq': SectionsFaq;
      'sections.faq-item': SectionsFaqItem;
      'sections.feature-card': SectionsFeatureCard;
      'sections.media-cta': SectionsMediaCta;
      'sections.simple-title': SectionsSimpleTitle;
      'shared.shared-cta-button': SharedSharedCtaButton;
      'shared.shared-seo': SharedSharedSeo;
      'shared.shared-tag': SharedSharedTag;
      'shared.shared-text-part': SharedSharedTextPart;
    }
  }
}
