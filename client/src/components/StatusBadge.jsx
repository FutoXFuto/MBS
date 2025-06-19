import { Box } from "@yamada-ui/react";

const STATUS_COLORS = {
  配送済: {
    bg: "#D1E7DD",
    color: "#355651",
  },
  未配送: {
    bg: "#FAD4D4",
    color: "#A83333",
  },
  要入力: {
    bg: "#FFE3B3",
    color: "#B85C00",
  },
  キャンセル済: {
    bg: "#F2A8A8",
    color: "#7B1C1C",
  },
};

const DEFAULT_STYLE = {
  bg: "gray.200",
  color: "gray.700",
};

export const StatusBadge = ({ status }) => {
  const { bg, color } = STATUS_COLORS[status] || DEFAULT_STYLE;

  return (
    <Box
      bg={bg}
      color={color}
      px="2"
      py="0.5"
      borderRadius="10"
      fontWeight="bold"
      fontSize={['14px', '17px']}
      display="inline-block"
      h="fit-content"
    >
      {status}
    </Box>
  );
};

export default StatusBadge;