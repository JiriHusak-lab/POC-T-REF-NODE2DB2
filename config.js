module.exports = {
	  TOPIC: 'wmj-topic',
	  TOPIC_EVENTS: 'finalevents',
	  KAFKA_HOST: 'apache-kafka:9092',
	  PUBSUB_TOPIC: 'responses',
	  MONGO_COLLECTION: 'test',
	  ENDPOINT_URL: 'http://127.0.0.1:3000/produce',
	  API_PORT: 3000,
	  API_CON_TIMEOUT: 5000, // ms
	  PRODUCER_CONFIG: {
	      requireAcks: 1,
	      ackTimeoutMs: 100,
	      partitionerType: 4
	  }
};
