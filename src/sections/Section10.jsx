import React from "react";
import "./Section10.css";
import FadeInWrapper from "@/components/FadeInWrapper";

export default function Section10() {
  return (
    <div className="section10">
      <div className="text">
        <p className="heading">SECURITY</p>
        <p className="subheading">No Compromises.</p>
      </div>
      <img
        src="https://www.apple.com/v/macbook-pro/ao/images/overview/themes/security/security__f2fnl53rrram_large.jpg"
        alt=""
      />
      <FadeInWrapper>
        <p className="desc">
          <span className="highlight">Security starts with Apple silicon </span>
          and extends to the macOS architecture. This deep integration of
          hardware and software along
          <br />
          with automatic software updates helps keep MacBook Pro stable and
          protected for the long term. The security architecture also powers
          features such as Touch ID, Find My, and advanced defenses that
          <br /> protect against viruses and malware.
        </p>
      </FadeInWrapper>
    </div>
  );
}
