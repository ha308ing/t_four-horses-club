import { FC, useCallback, useEffect, useState } from "react";
import styles from "./Carousel.module.css";

const svg = "./assets/svg.svg";

interface ICarouselArrowProps {
  isLeft?: boolean;
  disabled?: boolean;
  onClick: () => void;
}

const CarouselArrow: FC<ICarouselArrowProps> = ({
  disabled = false,
  isLeft = false,
  onClick,
}) => {
  const link = `${svg}#carousel-button-${isLeft ? "left" : "right"}`;

  return (
    <svg
      data-disabled={disabled}
      className={styles.icon}
      onClick={disabled ? undefined : onClick}
    >
      <use xlinkHref={link}></use>
    </svg>
  );
};

interface ICarouselIndicatorProps {
  isActive?: boolean;
}

const CarouseIndicator: FC<ICarouselIndicatorProps> = ({
  isActive = false,
}) => {
  return (
    <svg
      className={styles.iconCarouselIndicator}
      data-active={isActive}
      width={10}
      height={10}
    >
      <use xlinkHref={`${svg}#carousel-indicator`}></use>
    </svg>
  );
};

interface ICarouselIndicatorsProps {
  length: number;
  activeIndex: number;
  activeLength?: number;
}

const CarouselIndicators: FC<ICarouselIndicatorsProps> = ({
  length,
  activeIndex,
  activeLength = 1,
}) => {
  return (
    <div className={styles.controlIndicators}>
      {new Array(length).fill(0).map((_, index) => (
        <CarouseIndicator
          key={index}
          isActive={index < activeIndex + activeLength && index >= activeIndex}
        />
      ))}
    </div>
  );
};

interface ICarouselControlsProps {
  size: number;
  isDigital?: boolean;
  step?: number;
  withDisabled?: boolean;
  nextHandler?: (activeIndex: number) => void;
  prevHandler?: (activeIndex: number) => void;
  className?: string;
  autoScroll?: boolean;
}

export const CarouselControls: FC<ICarouselControlsProps> = ({
  size = 5,
  isDigital = false,
  step = 1,
  withDisabled = false,
  className = "",
  nextHandler,
  prevHandler,
  autoScroll = false,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [disabledLeft, setDisabledLeft] = useState(true);
  const [disabledRight, setDisabledRight] = useState(false);

  const setNext = useCallback(() => {
    if (activeIndex + step >= size - 1) {
      setDisabledRight(true);
    } else {
      setDisabledRight(false);
    }
    let newIndex = activeIndex;
    setActiveIndex((current) => {
      newIndex = current + step < size ? current + step : 0;
      if (nextHandler) nextHandler(newIndex);
      return newIndex;
    });
    setDisabledLeft(false);
  }, [activeIndex, nextHandler, size, step]);

  useEffect(() => {
    let interval: number;

    if (autoScroll) {
      interval = window.setInterval(() => {
        setNext();
      }, 4000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoScroll, setNext]);

  const setPrev = () => {
    if (activeIndex - step <= 0) {
      setDisabledLeft(true);
    } else {
      setDisabledLeft(false);
    }
    let newIndex = activeIndex;
    setActiveIndex((current) => {
      newIndex =
        current - step < 0
          ? size - step + Math.floor(size % step)
          : current - step;
      if (prevHandler) prevHandler(newIndex);
      return newIndex;
    });
    setDisabledRight(false);
  };

  const indicators = isDigital ? (
    <div className={styles.digitalIndicator}>
      <span className={styles.activeDigitalIndicator}>
        {activeIndex + step > size
          ? size
          : // ? activeIndex + step - Math.floor(size % step)/
            activeIndex + step}
      </span>
      <span className={styles.passiveDigitalIndicator}>/ {size}</span>
    </div>
  ) : (
    <CarouselIndicators
      length={size}
      activeIndex={activeIndex}
      activeLength={step}
    />
  );

  return (
    <div className={`${styles.controls} ${className}`}>
      <CarouselArrow
        isLeft={true}
        onClick={setPrev}
        disabled={withDisabled && disabledLeft}
      />
      {indicators}
      <CarouselArrow
        onClick={setNext}
        disabled={withDisabled && disabledRight}
      />
    </div>
  );
};
