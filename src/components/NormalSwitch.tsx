import React, { FC, useEffect, useState } from "react";

export const NormalSwitch: FC = () => {
  const [on, setOn] = useState<boolean | null>(null);

  useEffect(() => {
    chrome.storage.local.get("active", (item) => {
      setOn(item.active);
    });
  }, []);

  if (on === null) {
    return null;
  }

  return (
    <input
      type="checkbox"
      checked={on}
      onChange={(e) => {
        setOn(e.target.checked);
        chrome.storage.local.set({ active: e.target.checked });
      }}
    />
  );
};
