"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroSplitDoubleCarousel from '@/components/sections/hero/HeroSplitDoubleCarousel';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardTwentySix from '@/components/sections/feature/FeatureCardTwentySix';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardSixteen from '@/components/sections/testimonial/TestimonialCardSixteen';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import { Sparkles, Zap, Leaf, Lightbulb } from "lucide-react";

export default function SitePage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="large"
      background="none"
      cardStyle="gradient-radial"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="solid"
      headingFontWeight="extrabold"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="ColaLux"
          navItems={[
            { name: "Home", id: "#hero" },
            { name: "Products", id: "#products" },
            { name: "Features", id: "#features" },
            { name: "Testimonials", id: "#testimonials" },
            { name: "FAQ", id: "#faq" },
            { name: "Contact", id: "#contact" }
          ]}
          button={{ text: "Buy Now", href: "#products" }}
          animateOnLoad={true}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplitDoubleCarousel
          title="Taste Innovation, Feel the Difference"
          description="Experience cola reimagined through interactive storytelling. Touch, explore, and discover what makes our blend uniquely crafted for modern palates."
          background={{ variant: "sparkles-gradient" }}
          leftCarouselItems={[
            { imageSrc: "http://img.b2bpic.net/free-photo/refreshing-iced-coffee-glass-with-condensation-ice_84443-83820.jpg?_wi=1", imageAlt: "Dynamic cola bottle splash" },
            { imageSrc: "http://img.b2bpic.net/free-photo/futuristic-brightly-colored-soda-bottle_23-2150995220.jpg?_wi=1", imageAlt: "Sleek cola can design" },
            { imageSrc: "http://img.b2bpic.net/free-photo/fresh-citrus-fruit-juice-cocktail-flying-tangerine-slice-glass-selective-focus-levitating-fruit-slice-idea-making-cocktail-juice-from-mandarin_166373-1826.jpg?_wi=1", imageAlt: "Glass of cola with condensation" },
            { imageSrc: "http://img.b2bpic.net/free-photo/side-view-woman-sits-table-with-cocktail-lit-candle_140725-9075.jpg?_wi=1", imageAlt: "Elegant cola bottle label" },
            { imageSrc: "http://img.b2bpic.net/free-photo/brown-drink-falling-ice_1194-1210.jpg?_wi=1", imageAlt: "Cola splashing in a glass" },
            { imageSrc: "http://img.b2bpic.net/free-photo/front-view-blue-smoothie-with-decoration_23-2148555316.jpg?_wi=1", imageAlt: "Cola can on vibrant background" }
          ]}
          rightCarouselItems={[
            { imageSrc: "http://img.b2bpic.net/free-photo/front-view-blue-smoothie-with-decoration_23-2148555316.jpg?_wi=2", imageAlt: "Cola can on vibrant background" },
            { imageSrc: "http://img.b2bpic.net/free-photo/brown-drink-falling-ice_1194-1210.jpg?_wi=2", imageAlt: "Cola splashing in a glass" },
            { imageSrc: "http://img.b2bpic.net/free-photo/side-view-woman-sits-table-with-cocktail-lit-candle_140725-9075.jpg?_wi=2", imageAlt: "Elegant cola bottle label" },
            { imageSrc: "http://img.b2bpic.net/free-photo/fresh-citrus-fruit-juice-cocktail-flying-tangerine-slice-glass-selective-focus-levitating-fruit-slice-idea-making-cocktail-juice-from-mandarin_166373-1826.jpg?_wi=2", imageAlt: "Glass of cola with condensation" },
            { imageSrc: "http://img.b2bpic.net/free-photo/futuristic-brightly-colored-soda-bottle_23-2150995220.jpg?_wi=2", imageAlt: "Sleek cola can design" },
            { imageSrc: "http://img.b2bpic.net/free-photo/refreshing-iced-coffee-glass-with-condensation-ice_84443-83820.jpg?_wi=2", imageAlt: "Dynamic cola bottle splash" }
          ]}
          buttons={[
            { text: "Explore Our Collection", href: "#products" }
          ]}
          carouselPosition="right"
          useInvertedBackground={true}
        />
      </div>

      <div id="about" data-section="about">
        <TextAbout
          title="Crafted for Modern Palates"
          description="At ColaLux, we believe cola should be more than just a drink. It's an experience, a moment of refreshing discovery. Our master blenders have meticulously crafted a formula that balances classic cola notes with a sophisticated, contemporary twist, using only the finest ingredients."
          useInvertedBackground={false}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwentySix
          title="Unleash a Symphony of Flavors"
          description="Each bottle of ColaLux is a testament to our dedication to excellence. Discover the elements that make our cola truly exceptional and elevate your senses."
          features={[
            { title: "Finest Ingredients", description: "We source premium natural extracts and spices, ensuring every sip is pure and authentic.", imageSrc: "http://img.b2bpic.net/free-photo/sliced-lemons-with-wooden-bowls-filled-with-insects_23-2148225911.jpg", imageAlt: "Natural cola ingredients", buttonIcon: Sparkles },
            { title: "Perfect Carbonation", description: "Our unique carbonation process delivers a lively, effervescent fizz that delights the palate.", imageSrc: "http://img.b2bpic.net/free-photo/girl-drinking-cocoa_72229-628.jpg", imageAlt: "Close-up of cola bubbles", buttonIcon: Zap },
            { title: "Sustainable Sourcing", description: "Committed to the planet, our ingredients are sustainably harvested and our packaging is eco-conscious.", imageSrc: "http://img.b2bpic.net/free-photo/beautiful-curly-young-woman-outdoors-walking-drinking-coffee_1321-1035.jpg", imageAlt: "Eco-friendly cola bottle", buttonIcon: Leaf },
            { title: "Innovative Blends", description: "Beyond classic, explore limited-edition flavors that push the boundaries of taste and experience.", imageSrc: "http://img.b2bpic.net/free-photo/delicious-italian-cocktail-with-realistic-background_23-2150063018.jpg", imageAlt: "Cola infused with fruit", buttonIcon: Lightbulb }
          ]}
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardOne
          title="Our Exquisite Collection"
          description="From classic richness to innovative infusions, explore the full range of ColaLux creations, each designed to captivate your taste buds."
          products={[
            { id: "1", name: "ColaLux Classic", price: "$3.99", imageSrc: "http://img.b2bpic.net/free-photo/healthy-food-fresh-juice-fruit_169016-3405.jpg", imageAlt: "Classic ColaLux bottle" },
            { id: "2", name: "ColaLux Zero", price: "$3.99", imageSrc: "http://img.b2bpic.net/free-photo/different-colored-water-jars-balcony_181624-59057.jpg", imageAlt: "ColaLux Zero sugar can" },
            { id: "3", name: "ColaLux Berry Infused", price: "$4.49", imageSrc: "http://img.b2bpic.net/free-photo/refreshing-cocktail-with-slice-lemon-cherry_140725-8778.jpg", imageAlt: "ColaLux Berry infused bottle" },
            { id: "4", name: "ColaLux Limited Edition", price: "$5.99", imageSrc: "http://img.b2bpic.net/free-photo/tropical-drop-refreshment-steamy-refreshing_1172-475.jpg", imageAlt: "Limited Edition ColaLux bottle" },
            { id: "5", name: "ColaLux Mini Cans (4-pack)", price: "$7.99", imageSrc: "http://img.b2bpic.net/free-photo/happy-girls-watching-movie_23-2147718274.jpg", imageAlt: "ColaLux mini cans" },
            { id: "6", name: "ColaLux Variety Pack (6-pack)", price: "$12.99", imageSrc: "http://img.b2bpic.net/free-photo/drinks_23-2148014977.jpg", imageAlt: "ColaLux variety pack" }
          ]}
          gridVariant="bento-grid"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardSixteen
          title="What Our Connoisseurs Say"
          description="Hear from those who have experienced the ColaLux difference. Their journeys of discovery inspire us to continually push the boundaries of flavor."
          testimonials={[
            { id: "1", name: "Sarah J.", role: "Beverage Blogger", company: "TasteExplorer", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/charming-black-woman-with-stylish-hairstyle-with-headband-spending-her-weekend-park_273443-1834.jpg", imageAlt: "Sarah J." },
            { id: "2", name: "Michael C.", role: "Food Critic", company: "Gourmet Gazette", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/man-holding-up-his-drink-barber-shop_23-2148353454.jpg", imageAlt: "Michael C." },
            { id: "3", name: "Emily R.", role: "Mixologist", company: "The Craft Bar", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/close-up-friends-playing-game-table_23-2149066106.jpg", imageAlt: "Emily R." },
            { id: "4", name: "David K.", role: "Entrepreneur", company: "Flavor Labs", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/portrait-surprised-girl-sunglasses-holding-cup_171337-9933.jpg", imageAlt: "David K." },
            { id: "5", name: "Olivia M.", role: "Digital Creator", company: "Sip & Share", rating: 5, imageSrc: "http://img.b2bpic.net/free-photo/pakhlava-shekerbura-presented-vintage-platter-tea-setup_140725-4128.jpg", imageAlt: "Olivia M." }
          ]}
          kpiItems={[
            { value: "98%", label: "Taste Satisfaction" },
            { value: "4.9/5", label: "Average Rating" },
            { value: "100K+", label: "Happy Sips" }
          ]}
          animationType="depth-3d"
          textboxLayout="default"
          useInvertedBackground={true}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by Leading Palates"
          description="Our commitment to quality has earned us recognition from industry experts and discerning partners worldwide."
          names={[
            "Foodies United",            "Beverage Insider",            "The Modern Palate",            "Gourmet Daily",            "Drink Innovators",            "Taste Makers Society",            "Culinary Review",            "Global Brands",            "Retail Partners"
          ]}
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Your Questions, Our Answers"
          sideDescription="We believe in transparency. Find answers to the most common questions about ColaLux, our process, and our passion."
          faqs={[
            { id: "1", title: "What makes ColaLux unique?", content: "ColaLux stands out with its meticulously crafted blend of natural extracts and spices, offering a sophisticated taste profile that balances classic cola notes with a modern, refreshing twist. Our commitment to premium ingredients and sustainable practices further sets us apart." },
            { id: "2", title: "Are your ingredients all-natural?", content: "Yes, we pride ourselves on using only the finest natural ingredients. Our flavors are derived from botanical extracts and real fruit infusions, with no artificial flavors, colors, or preservatives." },
            { id: "3", title: "Do you offer sugar-free options?", content: "Absolutely! Our ColaLux Zero provides the same great taste experience as our classic blend but with zero sugar. It's perfectly crafted for those seeking a lighter alternative without compromising on flavor." },
            { id: "4", title: "Where can I purchase ColaLux?", content: "ColaLux is available through our online store for direct shipping, as well as in select gourmet supermarkets and specialty beverage retailers nationwide. Check our 'Find a Store' page for locations near you." }
          ]}
          faqsAnimation="slide-up"
          textPosition="left"
          useInvertedBackground={true}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCTA
          tag="Connect"
          title="Ready to Partner or Discover More?"
          description="Whether you're a retail partner, an enthusiast, or simply curious, we'd love to hear from you. Reach out and join the ColaLux journey."
          buttons={[
            { text: "Get in Touch", href: "mailto:info@colalux.com" }
          ]}
          background={{ variant: "sparkles-gradient" }}
          useInvertedBackground={false}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterMedia
          imageSrc="http://img.b2bpic.net/free-photo/view-cocktail-drink-glass-with-neo-futuristic-set_23-2150938284.jpg"
          imageAlt="ColaLux products display"
          logoText="ColaLux"
          columns={[
            { title: "Company", items: [{ label: "About Us", href: "#about" }, { label: "Our Story", href: "#" }, { label: "Careers", href: "#" }] },
            { title: "Products", items: [{ label: "Shop All", href: "#products" }, { label: "Classic Blend", href: "#" }, { label: "Zero Sugar", href: "#" }, { label: "Limited Editions", href: "#" }] },
            { title: "Support", items: [{ label: "FAQ", href: "#faq" }, { label: "Contact", href: "#contact" }, { label: "Shipping", href: "#" }] }
          ]}
          copyrightText="© 2024 ColaLux. All rights reserved."
          useInvertedBackground={true}
        />
      </div>
    </ThemeProvider>
  );
}
