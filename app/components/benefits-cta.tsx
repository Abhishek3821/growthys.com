"use client";

import { contentMarketingContent } from "../data/content-marketing-content";
import { cmsDesignContent } from "../data/cms-design-content";
import { hrmsContent } from "../data/hrms-content";

import { uiUxContent } from "../data/ui-ux-content";

import { socialMediaContent } from "../data/social-media-content";

import { seoContent } from "../data/seo-content";

import { appDevelopmentContent } from "../data/app-development-content";
import { webDevelopmentContent } from "../data/web-development-content";
import { ecommerceMarketingContent } from "../data/ecommerce-marketing-content";
import { graphicDesignContent } from "../data/graphic-design-content";
import { crmContent } from "../data/crm-content";
import { ecommerceContent } from "../data/ecommerce-content";
import WhatsAppForm from "./whatsapp-form";
import styles from "./benefits-cta.styles";

type BenefitsCtaProps = { hrms?: boolean; cmsDesign?: boolean; companyOverview?: boolean; contentMarketing?: boolean; uiUx?: boolean; socialMedia?: boolean; seo?: boolean; appDevelopment?: boolean; webDevelopment?: boolean; ecommerceMarketing?: boolean; graphicDesign?: boolean; crm?: boolean; ecommerce?: boolean; homepage?: boolean; performanceMarketing?: boolean; websiteDesign?: boolean; digitalMarketing?: boolean };

export default function BenefitsCta({ hrms = false, cmsDesign = false, companyOverview = false, contentMarketing = false, uiUx = false, socialMedia = false, seo = false, appDevelopment = false, webDevelopment = false, ecommerceMarketing = false, graphicDesign = false, crm = false, ecommerce = false, homepage = false, performanceMarketing = false, websiteDesign = false, digitalMarketing = false }: BenefitsCtaProps = {}) {

  return (
    <section className={styles.section} id="contact" aria-labelledby="benefits-cta-heading">
      <div className={styles.card}>
        <h2 id="benefits-cta-heading">
          {hrms ? <><span>Join Teams Around the World Getting</span>{" "}<span>the <strong>Most From Their HR Systems</strong></span></> : cmsDesign ? <><span>Join Teams Around the World</span>{" "}<span><strong>Publishing Faster</strong> With a Better CMS</span></> : companyOverview ? <><span>Let&apos;s Build Your Next Growth Chapter</span>{" "}<span>Tell Us Your Goals.</span>{" "}<span>We&apos;ll Show You the <strong>Plan.</strong></span></> : contentMarketing ? <><span>Join Teams Around the World Getting</span>{" "}<span><strong>90%+ Engagement</strong> With Their Content</span></> : uiUx ? <><span>Join Teams Around the World Getting</span>{" "}<span><strong>90%+ User Satisfaction</strong> With Their Products</span></> : socialMedia ? <><span>Join Teams Around the World Getting</span>{" "}<span><strong>90%+ Engagement</strong> With Their Social Channels</span></> : seo ? <><span>Join Businesses Getting</span>{" "}<span><strong>90%+ Engagement</strong> With Their SEO</span></> : appDevelopment ? <><span>Join Teams Around the World</span>{" "}<span>Shipping Apps <strong>Their Users Love</strong></span></> : webDevelopment ? <><span>Join Teams Around the World Getting</span>{" "}<span><strong>90%+ Website Performance Scores</strong></span></> : ecommerceMarketing ? <><span>Join Stores Around the World Getting</span>{" "}<span><strong>90%+ Email Engagement</strong></span></> : graphicDesign ? <><span>Join brands around the world getting</span>{" "}<span><strong>90%+ engagement</strong> with their visuals</span></> : crm ? <><span>Join Teams Around the World Getting</span>{" "}<span><strong>90%+ CRM Adoption</strong></span></> : ecommerce ? <><span>Join businesses across India scaling</span>{" "}<span>their online sales with <strong>Growthys</strong></span></> : digitalMarketing ? <>
            <span>Join businesses across India getting</span>{" "}
            <span><strong>90%+ engagement</strong> with their marketing</span>
          </> : websiteDesign ? <>
            <span>Join Businesses That Get</span>{" "}
            <span><strong>90%+ Engagement</strong> From Their Websites</span>
          </> : performanceMarketing ? <>
            <span>Join Businesses Getting</span>{" "}
            <span><strong>90%+ Campaign Engagement</strong> With Growthys</span>
          </> : homepage ? <>
            <span>Join businesses across India getting</span>{" "}
            <span><strong>90%+ engagement</strong> with their marketing</span>
          </> : <>
          <span>Join teams around the world getting</span>{" "}
          <span><strong>90%+ engagement</strong> with their benefits</span>{" "}
          <span>programmes</span>
          </>}
        </h2>
        <p className={styles.description}>{hrms ? hrmsContent.cta.description : cmsDesign ? cmsDesignContent.cta.description : companyOverview ? "Work with a reliable IT company in India that also knows how to market. Flexible plans, budget-friendly pricing, and no hidden fees." : contentMarketing ? contentMarketingContent.cta.description : uiUx ? uiUxContent.cta.description : socialMedia ? socialMediaContent.cta.description : seo ? seoContent.cta.description : appDevelopment ? appDevelopmentContent.cta.description : webDevelopment ? webDevelopmentContent.cta.description : ecommerceMarketing ? ecommerceMarketingContent.cta.description : graphicDesign ? graphicDesignContent.cta.description : crm ? crmContent.cta.description : ecommerce ? ecommerceContent.cta.description : digitalMarketing ? "Get SEO, ads, social media, and content — in any combination, fully flexible, with no painful agency back-and-forth. Budget-friendly. No hidden fees. No surprises." : websiteDesign ? "A website that works, looks right, and loads fast — without back-and-forth with multiple agencies. Clear pricing. No hidden fees. No surprises." : performanceMarketing ? "Get paid ads, SEO, landing pages, and tracking — in one flexible partnership. Clear pricing. No hidden charges. No surprises." : homepage ? "Get SEO, ads, design, and software — in any combination, fully flexible, all without painful agency back-and-forth. Budget-friendly. No hidden fees. No surprises." : "Get any benefit, in any country, and make it flexible, all without the painful admin. Budget-friendly. No hidden fees. No surprises."}</p>
        <WhatsAppForm className={styles.form} introduction="Hi Growthys! I am interested in your services. Please help me get started." aria-describedby="benefits-whatsapp-note">
          <div className={styles.formRow}>
            <div className={styles.emailField}>
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="3" stroke="currentColor" strokeWidth="1.6" /><path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
              <label className={styles.srOnly} htmlFor="benefits-email">Your email address</label>
              <input id="benefits-email" name="email" type="email" autoComplete="email" placeholder="Enter your email" required aria-describedby="benefits-privacy" />
            </div>
            <button className={styles.submitButton} type="submit">{hrms ? "Book a Free Demo" : contentMarketing ? "Get a Free Content Audit" : uiUx ? "Book a Free UX Review" : seo ? "Book a Free SEO Audit" : appDevelopment ? "Book a Free Consultation" : webDevelopment ? "Book a Call" : ecommerceMarketing ? "Book a Free Store Audit" : crm ? "Book a Demo" : homepage ? "Contact Us" : "Get started"}</button>
          </div>
          <p className={styles.privacy} id="benefits-privacy">By submitting you agree to our privacy policy.</p>
          <p className={styles.notice} id="benefits-whatsapp-note">Continue to WhatsApp with your email filled in, then tap Send.</p>
        </WhatsAppForm>
      </div>
    </section>
  );
}
