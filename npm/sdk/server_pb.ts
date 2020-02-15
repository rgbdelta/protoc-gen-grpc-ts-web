// Generated by protoc-gen-grpc-ts-web. DO NOT EDIT!

import * as jspb from 'google-protobuf';
import * as grpcWeb from 'grpc-web';

import * as googleProtobufWrappers from 'google-protobuf/google/protobuf/wrappers_pb';

export class Server {

	private client = new grpcWeb.GrpcWebClientBase({
		format: 'text',
	});

	private methodInfoInfo = new grpcWeb.AbstractClientBase.MethodInfo(
		InfoRes,
		(req: InfoReq) => req.serializeBinary(),
		InfoRes.deserializeBinary
	);

	constructor(
		private hostname: string,
		private defaultMetadata?: () => grpcWeb.Metadata,
	) { }

	info(req: InfoReq.AsObject, metadata?: grpcWeb.Metadata): Promise<InfoRes.AsObject> {
		return new Promise((resolve, reject) => {
			const message = new InfoReq();
			this.client.rpcCall(
				this.hostname + '/proto.Server/Info',
				message,
				Object.assign({}, this.defaultMetadata ? this.defaultMetadata() : {}, metadata),
				this.methodInfoInfo,
				(err: grpcWeb.Error, res: InfoRes) => {
					if (err) {
						reject(err);
					} else {
						resolve(res.toObject());
					}
				},
			);
		});
	}

}



export namespace InfoReq {
	export type AsObject = {
	}
}

export class InfoReq extends jspb.Message {

	serializeBinary(): Uint8Array {
		const writer = new jspb.BinaryWriter();
		InfoReq.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}

	toObject(): InfoReq.AsObject {
		return {
		};
	}

	static fromObject(obj: InfoReq.AsObject): InfoReq {
		const message = new InfoReq();
		return message;
	}

	static serializeBinaryToWriter(message: InfoReq, writer: jspb.BinaryWriter): void {
	}

	static deserializeBinary(bytes: Uint8Array): InfoReq {
		var reader = new jspb.BinaryReader(bytes);
		var message = new InfoReq();
		return InfoReq.deserializeBinaryFromReader(message, reader);
	}

	static deserializeBinaryFromReader(message: InfoReq, reader: jspb.BinaryReader): InfoReq {
		while (reader.nextField()) {
			if (reader.isEndGroup()) {
				break;
			}
			const field = reader.getFieldNumber();
			switch (field) {
			default:
				reader.skipField();
				break;
			}
		}
		return message;
	}

}

export namespace InfoRes {
	export type AsObject = {
		publicKey: string,
		host: googleProtobufWrappers.StringValue,
		port: number,
	}
}

export class InfoRes extends jspb.Message {

	getPublicKey(): string {
		return jspb.Message.getFieldWithDefault(this, 1, "");
	}

	setPublicKey(value: string): void {
		jspb.Message.setField(this, 1, value);
	}

	getHost(): googleProtobufWrappers.StringValue {
		return jspb.Message.getFieldWithDefault(this, 2, null);
	}

	setHost(value: googleProtobufWrappers.StringValue): void {
		jspb.Message.setWrapperField(this, 2, value);
	}

	getPort(): number {
		return jspb.Message.getFieldWithDefault(this, 3, 0);
	}

	setPort(value: number): void {
		jspb.Message.setField(this, 3, value);
	}

	serializeBinary(): Uint8Array {
		const writer = new jspb.BinaryWriter();
		InfoRes.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}

	toObject(): InfoRes.AsObject {
		return {
			publicKey: jspb.Message.getFieldWithDefault(this, 1, ""),
			host: jspb.Message.getFieldWithDefault(this, 2, null),
			port: jspb.Message.getFieldWithDefault(this, 3, 0),
		};
	}

	static fromObject(obj: InfoRes.AsObject): InfoRes {
		const message = new InfoRes();
		message.setPublicKey(obj.publicKey);
		message.setHost(obj.host);
		message.setPort(obj.port);
		return message;
	}

	static serializeBinaryToWriter(message: InfoRes, writer: jspb.BinaryWriter): void {
		const field1 = message.getPublicKey();
		if (field1.length > 0) {
			writer.writeString(1, field1);
		}
		const field2 = message.getHost();
		if (field2 != null) {
			writer.writeMessage(2, field2, googleProtobufWrappers.StringValue.serializeBinaryToWriter);
		}
		const field3 = message.getPort();
		if (field3 != 0) {
			writer.writeInt32(3, field3);
		}
	}

	static deserializeBinary(bytes: Uint8Array): InfoRes {
		var reader = new jspb.BinaryReader(bytes);
		var message = new InfoRes();
		return InfoRes.deserializeBinaryFromReader(message, reader);
	}

	static deserializeBinaryFromReader(message: InfoRes, reader: jspb.BinaryReader): InfoRes {
		while (reader.nextField()) {
			if (reader.isEndGroup()) {
				break;
			}
			const field = reader.getFieldNumber();
			switch (field) {
			case 1:
				const field1 = reader.readString()
				message.setPublicKey(field1);
				break;
			case 2:
				const field2 = new googleProtobufWrappers.StringValue();
				reader.readMessage(field2, googleProtobufWrappers.StringValue.deserializeBinaryFromReader);
				message.setHost(field2);
				break;
			case 3:
				const field3 = reader.readInt32()
				message.setPort(field3);
				break;
			default:
				reader.skipField();
				break;
			}
		}
		return message;
	}

}

