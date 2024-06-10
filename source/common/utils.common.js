// Modules
import { DateTime } from "luxon";

// Get UTC Timestamp
export const getUtcTimestamp = ({ extendByMs } = {}) => {
  let timestamp = DateTime.local();

  if (extendByMs) {
    timestamp = timestamp.plus({ milliseconds: extendByMs });
  }

  return timestamp.toMillis();
};

// Get Extended UTC Timestamp
export const getExtendedUtcTimestamp = ({ extendByMs }) => {
  return DateTime.local().plus({ milliseconds: extendByMs }).toMillis();
};

// Format Timestamp As Time
export const formatTimestampAsTime = (timestamp) => {
  const hours = new Date(timestamp).getHours();
  const minutes = new Date(timestamp).getMinutes();

  if (hours === 0) {
    return `12:${minutes} AM`;
  }

  if (hours > 12) {
    return `${hours - 12}:${minutes} PM`;
  }

  return `${hours}:${minutes} AM`;
};
