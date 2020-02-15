// Generated by protoc-gen-grpc-ts-web. DO NOT EDIT!

import * as jspb from 'google-protobuf';
import * as grpcWeb from 'grpc-web';

import * as googleProtobufTimestamp from 'google-protobuf/google/protobuf/timestamp_pb';
import * as googleProtobufEmpty from 'google-protobuf/google/protobuf/empty_pb';

export class Devices {

	private client = new grpcWeb.GrpcWebClientBase({
		format: 'text',
	});

	private methodInfoAddDevice = new grpcWeb.AbstractClientBase.MethodInfo(
		Device,
		(req: AddDeviceReq) => req.serializeBinary(),
		Device.deserializeBinary
	);

	private methodInfoListDevices = new grpcWeb.AbstractClientBase.MethodInfo(
		ListDevicesRes,
		(req: ListDevicesReq) => req.serializeBinary(),
		ListDevicesRes.deserializeBinary
	);

	private methodInfoDeleteDevice = new grpcWeb.AbstractClientBase.MethodInfo(
		googleProtobufEmpty.Empty,
		(req: DeleteDeviceReq) => req.serializeBinary(),
		googleProtobufEmpty.Empty.deserializeBinary
	);

	constructor(
		private hostname: string,
		private defaultMetadata?: () => grpcWeb.Metadata,
	) { }

	addDevice(req: AddDeviceReq.AsObject, metadata?: grpcWeb.Metadata): Promise<Device.AsObject> {
		return new Promise((resolve, reject) => {
			const message = new AddDeviceReq();
			message.setName(req.name);
			message.setPublicKey(req.publicKey);
			this.client.rpcCall(
				this.hostname + '/proto.Devices/AddDevice',
				message,
				Object.assign({}, this.defaultMetadata ? this.defaultMetadata() : {}, metadata),
				this.methodInfoAddDevice,
				(err: grpcWeb.Error, res: Device) => {
					if (err) {
						reject(err);
					} else {
						resolve(res.toObject());
					}
				},
			);
		});
	}

	listDevices(req: ListDevicesReq.AsObject, metadata?: grpcWeb.Metadata): Promise<ListDevicesRes.AsObject> {
		return new Promise((resolve, reject) => {
			const message = new ListDevicesReq();
			this.client.rpcCall(
				this.hostname + '/proto.Devices/ListDevices',
				message,
				Object.assign({}, this.defaultMetadata ? this.defaultMetadata() : {}, metadata),
				this.methodInfoListDevices,
				(err: grpcWeb.Error, res: ListDevicesRes) => {
					if (err) {
						reject(err);
					} else {
						resolve(res.toObject());
					}
				},
			);
		});
	}

	deleteDevice(req: DeleteDeviceReq.AsObject, metadata?: grpcWeb.Metadata): Promise<googleProtobufEmpty.Empty.AsObject> {
		return new Promise((resolve, reject) => {
			const message = new DeleteDeviceReq();
			message.setName(req.name);
			this.client.rpcCall(
				this.hostname + '/proto.Devices/DeleteDevice',
				message,
				Object.assign({}, this.defaultMetadata ? this.defaultMetadata() : {}, metadata),
				this.methodInfoDeleteDevice,
				(err: grpcWeb.Error, res: googleProtobufEmpty.Empty) => {
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



export namespace Device {
	export type AsObject = {
		name: string,
		owner: string,
		publicKey: string,
		address: string,
		createdAt: googleProtobufTimestamp.Timestamp,
	}
}

export class Device extends jspb.Message {

	getName(): string {
		return jspb.Message.getFieldWithDefault(this, 1, "");
	}

	setName(value: string): void {
		jspb.Message.setField(this, 1, value);
	}

	getOwner(): string {
		return jspb.Message.getFieldWithDefault(this, 2, "");
	}

	setOwner(value: string): void {
		jspb.Message.setField(this, 2, value);
	}

	getPublicKey(): string {
		return jspb.Message.getFieldWithDefault(this, 3, "");
	}

	setPublicKey(value: string): void {
		jspb.Message.setField(this, 3, value);
	}

	getAddress(): string {
		return jspb.Message.getFieldWithDefault(this, 4, "");
	}

	setAddress(value: string): void {
		jspb.Message.setField(this, 4, value);
	}

	getCreatedAt(): googleProtobufTimestamp.Timestamp {
		return jspb.Message.getFieldWithDefault(this, 5, null);
	}

	setCreatedAt(value: googleProtobufTimestamp.Timestamp): void {
		jspb.Message.setWrapperField(this, 5, value);
	}

	serializeBinary(): Uint8Array {
		const writer = new jspb.BinaryWriter();
		Device.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}

	toObject(): Device.AsObject {
		return {
			name: jspb.Message.getFieldWithDefault(this, 1, ""),
			owner: jspb.Message.getFieldWithDefault(this, 2, ""),
			publicKey: jspb.Message.getFieldWithDefault(this, 3, ""),
			address: jspb.Message.getFieldWithDefault(this, 4, ""),
			createdAt: jspb.Message.getFieldWithDefault(this, 5, null),
		};
	}

	static fromObject(obj: Device.AsObject): Device {
		const message = new Device();
		message.setName(obj.name);
		message.setOwner(obj.owner);
		message.setPublicKey(obj.publicKey);
		message.setAddress(obj.address);
		message.setCreatedAt(obj.createdAt);
		return message;
	}

	static serializeBinaryToWriter(message: Device, writer: jspb.BinaryWriter): void {
		const field1 = message.getName();
		if (field1.length > 0) {
			writer.writeString(1, field1);
		}
		const field2 = message.getOwner();
		if (field2.length > 0) {
			writer.writeString(2, field2);
		}
		const field3 = message.getPublicKey();
		if (field3.length > 0) {
			writer.writeString(3, field3);
		}
		const field4 = message.getAddress();
		if (field4.length > 0) {
			writer.writeString(4, field4);
		}
		const field5 = message.getCreatedAt();
		if (field5 != null) {
			writer.writeMessage(5, field5, googleProtobufTimestamp.Timestamp.serializeBinaryToWriter);
		}
	}

	static deserializeBinary(bytes: Uint8Array): Device {
		var reader = new jspb.BinaryReader(bytes);
		var message = new Device();
		return Device.deserializeBinaryFromReader(message, reader);
	}

	static deserializeBinaryFromReader(message: Device, reader: jspb.BinaryReader): Device {
		while (reader.nextField()) {
			if (reader.isEndGroup()) {
				break;
			}
			const field = reader.getFieldNumber();
			switch (field) {
			case 1:
				const field1 = reader.readString()
				message.setName(field1);
				break;
			case 2:
				const field2 = reader.readString()
				message.setOwner(field2);
				break;
			case 3:
				const field3 = reader.readString()
				message.setPublicKey(field3);
				break;
			case 4:
				const field4 = reader.readString()
				message.setAddress(field4);
				break;
			case 5:
				const field5 = new googleProtobufTimestamp.Timestamp();
				reader.readMessage(field5, googleProtobufTimestamp.Timestamp.deserializeBinaryFromReader);
				message.setCreatedAt(field5);
				break;
			default:
				reader.skipField();
				break;
			}
		}
		return message;
	}

}

export namespace AddDeviceReq {
	export type AsObject = {
		name: string,
		publicKey: string,
	}
}

export class AddDeviceReq extends jspb.Message {

	getName(): string {
		return jspb.Message.getFieldWithDefault(this, 1, "");
	}

	setName(value: string): void {
		jspb.Message.setField(this, 1, value);
	}

	getPublicKey(): string {
		return jspb.Message.getFieldWithDefault(this, 2, "");
	}

	setPublicKey(value: string): void {
		jspb.Message.setField(this, 2, value);
	}

	serializeBinary(): Uint8Array {
		const writer = new jspb.BinaryWriter();
		AddDeviceReq.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}

	toObject(): AddDeviceReq.AsObject {
		return {
			name: jspb.Message.getFieldWithDefault(this, 1, ""),
			publicKey: jspb.Message.getFieldWithDefault(this, 2, ""),
		};
	}

	static fromObject(obj: AddDeviceReq.AsObject): AddDeviceReq {
		const message = new AddDeviceReq();
		message.setName(obj.name);
		message.setPublicKey(obj.publicKey);
		return message;
	}

	static serializeBinaryToWriter(message: AddDeviceReq, writer: jspb.BinaryWriter): void {
		const field1 = message.getName();
		if (field1.length > 0) {
			writer.writeString(1, field1);
		}
		const field2 = message.getPublicKey();
		if (field2.length > 0) {
			writer.writeString(2, field2);
		}
	}

	static deserializeBinary(bytes: Uint8Array): AddDeviceReq {
		var reader = new jspb.BinaryReader(bytes);
		var message = new AddDeviceReq();
		return AddDeviceReq.deserializeBinaryFromReader(message, reader);
	}

	static deserializeBinaryFromReader(message: AddDeviceReq, reader: jspb.BinaryReader): AddDeviceReq {
		while (reader.nextField()) {
			if (reader.isEndGroup()) {
				break;
			}
			const field = reader.getFieldNumber();
			switch (field) {
			case 1:
				const field1 = reader.readString()
				message.setName(field1);
				break;
			case 2:
				const field2 = reader.readString()
				message.setPublicKey(field2);
				break;
			default:
				reader.skipField();
				break;
			}
		}
		return message;
	}

}

export namespace ListDevicesReq {
	export type AsObject = {
	}
}

export class ListDevicesReq extends jspb.Message {

	serializeBinary(): Uint8Array {
		const writer = new jspb.BinaryWriter();
		ListDevicesReq.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}

	toObject(): ListDevicesReq.AsObject {
		return {
		};
	}

	static fromObject(obj: ListDevicesReq.AsObject): ListDevicesReq {
		const message = new ListDevicesReq();
		return message;
	}

	static serializeBinaryToWriter(message: ListDevicesReq, writer: jspb.BinaryWriter): void {
	}

	static deserializeBinary(bytes: Uint8Array): ListDevicesReq {
		var reader = new jspb.BinaryReader(bytes);
		var message = new ListDevicesReq();
		return ListDevicesReq.deserializeBinaryFromReader(message, reader);
	}

	static deserializeBinaryFromReader(message: ListDevicesReq, reader: jspb.BinaryReader): ListDevicesReq {
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

export namespace ListDevicesRes {
	export type AsObject = {
		items: Array<Device>,
	}
}

export class ListDevicesRes extends jspb.Message {

	getItems(): Array<Device> {
		return jspb.Message.getFieldWithDefault(this, 1, [null]);
	}

	setItems(value: Array<Device>): void {
		jspb.Message.setRepeatedWrapperField(this, 1, value);
	}
	
	addItems(value: Device, index?: number): Device {
		return jspb.Message.addToRepeatedWrapperField(this, 1, value, Device, index);
	}

	serializeBinary(): Uint8Array {
		const writer = new jspb.BinaryWriter();
		ListDevicesRes.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}

	toObject(): ListDevicesRes.AsObject {
		return {
			items: jspb.Message.getFieldWithDefault(this, 1, [null]),
		};
	}

	static fromObject(obj: ListDevicesRes.AsObject): ListDevicesRes {
		const message = new ListDevicesRes();
		message.setItems(obj.items);
		return message;
	}

	static serializeBinaryToWriter(message: ListDevicesRes, writer: jspb.BinaryWriter): void {
		const field1 = message.getItems();
		if (field1.length > 0) {
			writer.writeRepeatedMessage(1, field1, Device.serializeBinaryToWriter);
		}
	}

	static deserializeBinary(bytes: Uint8Array): ListDevicesRes {
		var reader = new jspb.BinaryReader(bytes);
		var message = new ListDevicesRes();
		return ListDevicesRes.deserializeBinaryFromReader(message, reader);
	}

	static deserializeBinaryFromReader(message: ListDevicesRes, reader: jspb.BinaryReader): ListDevicesRes {
		while (reader.nextField()) {
			if (reader.isEndGroup()) {
				break;
			}
			const field = reader.getFieldNumber();
			switch (field) {
			case 1:
				const field1 = new Device();
				reader.readMessage(field1, Device.deserializeBinaryFromReader);
				message.addItems(field1);
				break;
			default:
				reader.skipField();
				break;
			}
		}
		return message;
	}

}

export namespace DeleteDeviceReq {
	export type AsObject = {
		name: string,
	}
}

export class DeleteDeviceReq extends jspb.Message {

	getName(): string {
		return jspb.Message.getFieldWithDefault(this, 1, "");
	}

	setName(value: string): void {
		jspb.Message.setField(this, 1, value);
	}

	serializeBinary(): Uint8Array {
		const writer = new jspb.BinaryWriter();
		DeleteDeviceReq.serializeBinaryToWriter(this, writer);
		return writer.getResultBuffer();
	}

	toObject(): DeleteDeviceReq.AsObject {
		return {
			name: jspb.Message.getFieldWithDefault(this, 1, ""),
		};
	}

	static fromObject(obj: DeleteDeviceReq.AsObject): DeleteDeviceReq {
		const message = new DeleteDeviceReq();
		message.setName(obj.name);
		return message;
	}

	static serializeBinaryToWriter(message: DeleteDeviceReq, writer: jspb.BinaryWriter): void {
		const field1 = message.getName();
		if (field1.length > 0) {
			writer.writeString(1, field1);
		}
	}

	static deserializeBinary(bytes: Uint8Array): DeleteDeviceReq {
		var reader = new jspb.BinaryReader(bytes);
		var message = new DeleteDeviceReq();
		return DeleteDeviceReq.deserializeBinaryFromReader(message, reader);
	}

	static deserializeBinaryFromReader(message: DeleteDeviceReq, reader: jspb.BinaryReader): DeleteDeviceReq {
		while (reader.nextField()) {
			if (reader.isEndGroup()) {
				break;
			}
			const field = reader.getFieldNumber();
			switch (field) {
			case 1:
				const field1 = reader.readString()
				message.setName(field1);
				break;
			default:
				reader.skipField();
				break;
			}
		}
		return message;
	}

}


